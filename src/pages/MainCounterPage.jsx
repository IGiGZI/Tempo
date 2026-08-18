import Stopwatch from "../components/Stopwatch";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

function MainCounterPage() {
	const [modalMode, setModalMode] = useState();
	return (
		<>
			<Navbar setModalMode={setModalMode} />
			<header className="mb-12">
				<img
					src="/stopwatchLogo.svg"
					alt="stopwatch.png"
					className="w-50 text-center m-auto mb-8"
				/>
			</header>
			<main>
				<Stopwatch />
				<AuthModal modalMode={modalMode} setModalMode={setModalMode} />
			</main>
		</>
	);
}

export default MainCounterPage;
