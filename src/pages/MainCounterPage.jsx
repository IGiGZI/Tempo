import Stopwatch from "../components/Stopwatch";
import Navbar from "../components/Navbar";

function MainCounterPage() {
	return (
		<>
			<Navbar />
			<header className="mb-12 mt-16">
				<img
					src="/stopwatchLogo.svg"
					alt="stopwatch.png"
					className="w-50 text-center m-auto mb-8"
				/>
			</header>
			<main>
				<Stopwatch />
			</main>
		</>
	);
}

export default MainCounterPage;
