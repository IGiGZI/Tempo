function Navbar() {
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
			<div>
				<button className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer">
					Login
				</button>
				<button className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer">
					Sign up
				</button>
			</div>
		</nav>
	);
}

export default Navbar
