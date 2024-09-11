import React from "react";

const Footer = () => {
	return (
		<footer className="bg-slate-700 p-8 text-center ">
			<p>
				Copyright &copy; {new Date().getFullYear()} HorokuApp - By Alexander
			</p>
		</footer>
	);
};

export default Footer;
