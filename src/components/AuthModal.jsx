import { useAuth } from "../context/AuthContext";
import { useRef } from "react";
import Modal from "./Modal";

function AuthModal({ modalMode, setModalMode }) {
	const { login, signup, error, setError } = useAuth();
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

	return (
		<Modal isOpen={modalMode} onClose={handleCloseModal}>
			<div>
				<div className="bg-[#222222] p-8 rounded-3xl text-center w-96">
					<div className="flex items-center justify-between mb-11">
						<h1 className="text-4xl font-semibold">
							{modalMode === "login" ? "Log in" : "Sign up"}
						</h1>
						<button
							onClick={handleCloseModal}
							className="w-12 cursor-pointer hover:rotate-90 transition duration-300"
						>
							<img src="cancelSvg.svg" alt="" />
						</button>
					</div>
					<div className="flex flex-col gap-4 justify-center items-center mb-11">
						<input
							className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full"
							type="email"
							placeholder="E-mail"
							ref={emailRef}
						/>
						<input
							className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full"
							type="password"
							placeholder="password"
							ref={passwordRef}
						/>
						{error && <p className="text-red-700">{error}</p>}
					</div>
					<button
						onClick={() => {
							handleAuthClick();
						}}
						className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3.5 cursor-pointer w-full font-bold text-2xl"
					>
						{modalMode === "login" ? "Log in" : "Sign up"}
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default AuthModal;
