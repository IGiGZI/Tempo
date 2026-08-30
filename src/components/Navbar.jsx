import { useAuth } from "../context/AuthContext";
import { Link, NavLink } from "react-router";
import AuthModal from "./AuthModal";
import UserIcon from "../assets/icons/userProfile.svg?react";

function Navbar() {
	const {
		isLoggedIn,
		currEmail,
		logoutFn,
		isMenuOpen,
		setIsMenuOpen,
		modalMode,
		setModalMode,
	} = useAuth();

	function handleOpenModal(identifier) {
		setModalMode(identifier);
		setIsMenuOpen(false);
	}

	function handleLogout() {
		logoutFn();
		setIsMenuOpen(false);
	}

	return (
		<nav className="w-full border-b-2 border-b-[#1D2128]">
			<div className="w-full flex items-center justify-between p-4">
				<div className="flex items-center gap-3">
					<img
						src="/stopwatchLogo.svg"
						alt="stopwatch.png"
						className="w-9 md:w-12"
					/>
					<h1 className="font-bold text-2xl md:text-4xl">Tempo</h1>
				</div>

				{/* Desktop links */}
				<div className="links hidden md:flex items-center gap-8">
					<NavLink to={"/"}>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							Home Page
						</p>
					</NavLink>
					<NavLink to={"/about"}>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							About
						</p>
					</NavLink>
					<NavLink to={"/contact"}>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							Contact
						</p>
					</NavLink>
				</div>

				{/* Desktop auth section */}
				<div className="hidden md:block">
					{!isLoggedIn && (
						<div>
							<button
								onClick={() => handleOpenModal("login")}
								className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
							>
								Login
							</button>
							<button
								onClick={() => handleOpenModal("signup")}
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
									<UserIcon className="w-8 h-8 text-[#454545] transition duration-300" />
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

				{/* Hamburger button */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
					aria-label="Toggle menu"
				>
					<span
						className={`block w-6 h-0.5 bg-white transition duration-300 ${
							isMenuOpen ? "rotate-45 translate-y-2" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white transition duration-300 ${
							isMenuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white transition duration-300 ${
							isMenuOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile dropdown */}
			{isMenuOpen && (
				<div className="md:hidden flex flex-col gap-4 px-4 pb-4">
					<NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							Home Page
						</p>
					</NavLink>
					<NavLink to={"/about"} onClick={() => setIsMenuOpen(false)}>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							About
						</p>
					</NavLink>
					<NavLink
						to={"/contact"}
						onClick={() => setIsMenuOpen(false)}
					>
						<p className="hover:text-[#00C39A] transition duration-300 text-xl">
							Contact
						</p>
					</NavLink>

					<div className="border-t border-[#1D2128] pt-4">
						{!isLoggedIn && (
							<div className="flex flex-col gap-2">
								<button
									onClick={() => handleOpenModal("login")}
									className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 cursor-pointer w-full"
								>
									Login
								</button>
								<button
									onClick={() => handleOpenModal("signup")}
									className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 cursor-pointer w-full"
								>
									Sign up
								</button>
							</div>
						)}
						{isLoggedIn && (
							<div className="flex flex-col gap-3">
								<div className="border-2 border-[#454545] p-2 rounded hover:border-[#00C39A] transition duration-300">
									<Link
										to={"/profile"}
										onClick={() => setIsMenuOpen(false)}
										className="flex items-center gap-2"
									>
										<UserIcon className="w-8 h-8 text-[#454545] transition duration-300" />
										<p className="text-white">
											{currEmail}
										</p>
									</Link>
								</div>

								<button
									onClick={handleLogout}
									className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 cursor-pointer w-full"
								>
									Log out
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			<AuthModal
				modalMode={modalMode}
				setModalMode={setModalMode}
				handleOpenModal={handleOpenModal}
			/>
		</nav>
	);
}

export default Navbar;
