import React from "react";
import Link from "next/link";
import { getUserFromCookie } from "../lib/getUser";
import { logoutUser } from "../actions/userController";
const Header = async () => {
	const user = await getUserFromCookie();

	return (
		<header className="w-full  bg-slate-900 shadow-lg dark:bg-slate-100 text-slate-900 ">
			<div className="navbar container mx-auto">
				<div className="flex-1">
					<Link href="/" className="btn btn-ghost text-xl">
						HorokuApp
					</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						{user ? (
							<>
								<Link href="/create" className="btn btn-primary text-xl mr-9">
									Create Haiku
								</Link>
								<form action={logoutUser} method="post">
									<button className="btn btn-neutral text-xl">Logout</button>
								</form>
							</>
						) : (
							<>
								<form action="/login">
									<button className="btn btn-neutral text-xl">Login</button>
								</form>
							</>
						)}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
