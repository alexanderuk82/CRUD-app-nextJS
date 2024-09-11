import Link from "next/link";

import RegisterForm from "../components/RegisterForm";

const page = () => {
	return (
		<div className="mt-8">
			<p className="text-center text-2xl">
				Don&rsquo;t have an account? <strong>Create one now!</strong>
			</p>
			<RegisterForm />
		</div>
	);
};

export default page;
