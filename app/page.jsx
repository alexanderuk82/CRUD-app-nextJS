import RegisterForm from "../components/RegisterForm";
import { getUserFromCookie } from "../lib/getUser";

const page = async () => {
	const user = await getUserFromCookie();

	return (
		<div className="mt-8">
			{user ? (
				<p>Welcome your are logged in as {user.username}</p>
			) : (
				<>
					<p className="text-center text-2xl">
						Don&rsquo;t have an account? <strong>Create one now!</strong>
					</p>
					<RegisterForm />
				</>
			)}
		</div>
	);
};

export default page;
