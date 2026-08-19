import { useAuth } from "../context/AuthContext";
import { useRef } from "react";

function AuthModal({ modalMode, setModalMode }) {
	function handleCloseModal(){
		setModalMode(null)
	}

	const { login, signup } = useAuth()
	

	const emailRef = useRef(null)
	const passwordRef = useRef(null)

	function handleAuthClick(){
		if (modalMode === 'login'){
			login(emailRef.current.value, passwordRef.current.value)
		} else {
			signup(emailRef.current.value, passwordRef.current.value)
		}
		handleCloseModal()
	}


	return (
		<>
			{modalMode && (
				<div>
					<div className="fixed inset-0 bg-black/50"></div>
					<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#222222] p-8 rounded-3xl text-center w-96">
						<div className="flex items-center justify-between mb-11">
							<h1 className="text-4xl font-semibold">
								{modalMode === "login" ? "Log in" : "Sign up"}
							</h1>
							<button onClick={handleCloseModal} className="w-12 cursor-pointer hover:rotate-90 transition duration-300">
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
						</div>
						<button onClick={() => {handleAuthClick()}} className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3.5 cursor-pointer w-full font-bold text-2xl">
							{modalMode === "login" ? "Log in" : "Sign up"}
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default AuthModal;
