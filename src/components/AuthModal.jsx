import { useAuth } from "../context/AuthContext";
import { useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Modal from "./Modal";

function AuthModal({ modalMode, setModalMode }) {
	const { login, signup, googleLoginFn, error, setError } = useAuth();
	function handleCloseModal() {
		setModalMode(null);
		setError(null);
	}

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	async function handleAuthClick() {
		if (modalMode === "login") {
			try {
				await login(emailRef.current.value, passwordRef.current.value);
				handleCloseModal();
			} catch (err) {
				// show err if needed
				console.log(err);
			}
		} else {
			try {
				await signup(emailRef.current.value, passwordRef.current.value);
				handleCloseModal();
			} catch (err) {
				console.log(err);
			}
		}
	}

	async function handleGoogleSuccess(credentialResponse) {
		try {
			await googleLoginFn(credentialResponse.credential);
			handleCloseModal();
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Modal isOpen={modalMode} onClose={handleCloseModal}>
			<div className="w-full flex justify-center px-4">
				<div className="bg-[#222222] p-6 sm:p-8 rounded-3xl text-center w-full max-w-96">
					<div className="flex items-center justify-between mb-8 sm:mb-11">
						<h1 className="text-2xl sm:text-4xl font-semibold">
							{modalMode === "login" ? "Log in" : "Sign up"}
						</h1>
						<button
							onClick={handleCloseModal}
							className="w-8 sm:w-12 cursor-pointer hover:rotate-90 transition duration-300"
						>
							<img src="cancelSvg.svg" alt="" />
						</button>
					</div>
					<div className="flex flex-col gap-4 justify-center items-center mb-8 sm:mb-11">
						<input
							className="border-3 border-[#000000] outline-0 p-2.5 sm:p-3 rounded-xl w-full text-sm sm:text-base"
							type="email"
							placeholder="E-mail"
							ref={emailRef}
						/>
						<input
							className="border-3 border-[#000000] outline-0 p-2.5 sm:p-3 rounded-xl w-full text-sm sm:text-base"
							type="password"
							placeholder="password"
							ref={passwordRef}
						/>
						{error && (
							<p className="text-red-700 text-sm sm:text-base">
								{error}
							</p>
						)}
						{modalMode === "signup" && (
							<div className="text-left w-full">
								<p className="mb-2 text-sm sm:text-base">
									Password must be at least 6 characters long.
								</p>
								<p className="mb-2 text-sm sm:text-base">
									Password must contain at least 1 alphabet
									character.
								</p>
								<p className="text-sm sm:text-base">
									Password must contain at least 1 number.
								</p>
							</div>
						)}
					</div>
					<button
						onClick={() => {
							handleAuthClick();
						}}
						className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3 sm:p-3.5 cursor-pointer w-full font-bold text-xl sm:text-2xl mb-4"
					>
						{modalMode === "login" ? "Log in" : "Sign up"}
					</button>
					<div className="flex justify-center">
						<GoogleLogin
							onSuccess={handleGoogleSuccess}
							onError={() => {
								console.log("Google login failed");
							}}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default AuthModal;