import Link from "next/link";

const page = () => {
	return (
		<div className="mt-8">
			<p className="text-center text-2xl">
				Don&rsquo;t have an account? <strong>Create one now!</strong>
			</p>
			<form action="" className=" max-w-xs mx-auto mt-10">
				<div className="">
					<input
						type="text"
						placeholder="Username"
						className="input input-bordered w-full max-w-xs"
						autoComplete="off"
					/>
				</div>
			</form>
		</div>
	);
};

export default page;
