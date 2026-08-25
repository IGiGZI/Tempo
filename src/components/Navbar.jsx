import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";
import UserIcon from "../assets/icons/userProfile.svg?react";

function Navbar({ handleOpenModal }) {
	const { isLoggedIn, currEmail, logoutFn } = useAuth();

	// console.log(`Current email: ${currEmail}`);
	// console.log(`isLoggedIn: ${isLoggedIn}`);

	return (
		<nav className="w-full flex items-center justify-between p-4 border-b-2 border-b-[#1D2128] mb-16">
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
					<p className="hover:text-[#00C39A] transition duration-300 text-xl">
						Home Page
					</p>
				</Link>
				<Link to={"/"}>
					<p className="hover:text-[#00C39A] transition duration-300 text-xl">
						About
					</p>
				</Link>
				<Link to={"/"}>
					<p className="hover:text-[#00C39A] transition duration-300 text-xl">
						Contact
					</p>
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
						<div className="border-2 border-[#454545] p-2 rounded hover:border-[#00C39A] transition duration-300">
							<Link
								to={"/profile"}
								className="flex items-center gap-2"
							>
								<UserIcon className="w-8 h-8 text-[#454545]  transition duration-300" />
								<p className="text-white">{currEmail}</p>
							</Link>
						</div>

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
