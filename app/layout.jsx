import "./global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
	title: "CRUD APP",
	description: "This is a Next.js CRUD app"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" dark:text-white light:bg-slate-50  text-slate-900 ">
				<Header />
				<main className="container mx-auto min-h-[70vh] ">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
