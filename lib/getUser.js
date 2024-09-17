import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function getUserFromCookie() {
	const theCookie = cookies().get("HorokuApp")?.value;
	if (theCookie) {
		try {
			const user = await jwt.verify(theCookie, process.env.JWTSECRET);
			return user;
		} catch (error) {
			return null;
		}
	}
}
