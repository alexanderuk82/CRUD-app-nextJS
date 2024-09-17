"use server";
import { getCollection } from "../lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

// Validation text input fields expression with this

function isAlphanumeric(str) {
	return /^[a-zA-Z0-9]+$/.test(str);
}

// Logout action
export const logoutUser = async (prevState, formData) => {
	cookies().delete("HorokuApp");
	redirect("/");
};

export const registerUser = async (prevState, formData) => {
	const errors = {};

	// Get values from formData using formData.get()
	const ourUser = {
		username: formData.get("username"), // Use formData.get() to access form field values
		password: formData.get("password") // Use formData.get() to access form field values
	};

	// Logging input to debug data
	console.log("Received formData:", formData);
	console.log("Processed user data:", ourUser);

	// Check if values are strings and trim white spaces
	if (typeof ourUser.username !== "string") ourUser.username = "";
	if (typeof ourUser.password !== "string") ourUser.password = "";

	ourUser.username = ourUser.username.trim();
	ourUser.password = ourUser.password.trim();

	// Validate username
	if (ourUser.username.length < 3) {
		errors.username = "Username must be at least 3 characters";
	}
	if (ourUser.username.length > 10) {
		errors.username = "Username must be no more than 10 characters";
	}

	if (!isAlphanumeric(ourUser.username)) {
		errors.username = "Username just have to contain text and numbers";
	}
	if (ourUser.username === "") {
		errors.username = "Username is required";
	}

	// Validate password (e.g., at least 6 characters)
	if (ourUser.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	}
	if (ourUser.password === "") {
		errors.password = "Password is required";
	}

	// Logging the errors object to debug validation
	console.log("Errors object:", errors);

	// If there are errors, return them
	if (Object.keys(errors).length > 0) {
		return {
			errors,
			success: false
		};
	}

	// Before, to store the user in the database, we need to hash the password using bcrypt

	const salt = await bcrypt.genSalt(10);
	ourUser.password = await bcrypt.hash(ourUser.password, salt);

	// Storing user in The Database

	const userCollection = await getCollection("users"); //we build the collection name
	const newUser = await userCollection.insertOne(ourUser); //we insert the user in the collection
	const userId = newUser.insertedId.toString(); //we get the id of the user

	// Creating a JWT token
	const token = await jwt.sign(
		{
			id: userId,
			username: ourUser.username,
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
		},
		process.env.JWTSECRET
	);

	//Log the user in by giving them a cookie

	cookies().set("HorokuApp", token, {
		httpOnly: true,
		sameSite: "strict",
		maxAge: 60 * 60 * 24 * 30,
		secure: true
	});

	// If no errors, return the user
	return {
		user: ourUser,
		success: true
	};
};
