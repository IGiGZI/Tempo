function AuthModal({ modalMode, setModalMode }) {
	function handleCloseModal(){
		setModalMode(null)
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
							/>
							<input
								className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full"
								type="password"
								placeholder="password"
							/>
						</div>
						<button className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3.5 cursor-pointer w-full font-bold text-2xl">
							{modalMode === "login" ? "Log in" : "Sign up"}
						</button>
					</div>
				</div>
			)}

			{/* <div className="fixed inset-0 bg-black/50 hidden"></div>
			<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#222222] p-8 rounded-3xl text-center w-96 hidden">
				<div className="flex items-center justify-between mb-11">
					<h1 className="text-4xl font-semibold">Sign up</h1>
					<button className="w-12 cursor-pointer hover:rotate-90 transition duration-300">
						<img src="cancelSvg.svg" alt="" />
					</button>
				</div>
				<div className="flex flex-col gap-4 justify-center items-center mb-11">
					<input
						className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full"
						type="email"
						placeholder="E-mail"
					/>
					<input
						className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full"
						type="password"
						placeholder="password"
					/>
				</div>
				<button className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3.5 cursor-pointer w-full font-bold text-2xl">
					Sign up
				</button>
			</div> */}
		</>
	);
}

export default AuthModal;
