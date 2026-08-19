import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

function Navbar({ handleOpenModal }) {
	const { isLoggedIn, currEmail, logoutFn } = useAuth();

	// console.log(`Current email: ${currEmail}`);
	// console.log(`isLoggedIn: ${isLoggedIn}`);

	return (
		<nav className="w-full flex items-center justify-between p-4 border-b-2 border-b-gray-400 mb-16">
			<div className="flex items-center gap-3">
				<img
					src="/stopwatchLogo.svg"
					alt="stopwatch.png"
					className="w-12"
				/>
				<h1 className="font-bold text-4xl">Tempo</h1>
			</div>
			<div className="flex gap-8">
				<Link to={"/"}>
					<p className="underline underline-offset-8">Home Page</p>
				</Link>
				<Link to={"/"}>
					<p className="underline underline-offset-8">About</p>
				</Link>
				<Link to={"/"}>
					<p className="underline underline-offset-8">Contact</p>
				</Link>
			</div>
			<div>
				{!isLoggedIn && (
					<div>
						<button
							onClick={() => {
								handleOpenModal("login");
							}}
							className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
						>
							Login
						</button>
						<button
							onClick={() => {
								handleOpenModal("signup");
							}}
							className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
						>
							Sign up
						</button>
					</div>
				)}
				{isLoggedIn && (
					<div className="flex items-center gap-3.5">
						<Link to={"/profile"}>
							<p className="text-white">{currEmail}</p>
						</Link>
						<button
							onClick={logoutFn}
							className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
						>
							Log out
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
