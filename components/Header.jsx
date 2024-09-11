import React from "react";
import Link from "next/link";
const Header = () => {
	return (
		<header className="w-full  bg-slate-900 shadow-lg dark:bg-slate-100 text-slate-900 ">
			<div className="navbar container mx-auto">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">HorokuApp</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/login">Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
