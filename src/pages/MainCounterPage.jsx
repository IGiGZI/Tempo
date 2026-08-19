import Stopwatch from "../components/Stopwatch";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
// import SaveModal from "../components/SaveModal";
import { useState } from "react";

function MainCounterPage() {
	const [modalMode, setModalMode] = useState(null);
	// const [isOpen, setIsOpen] = useState(false);

	function handleOpenModal(identifier) {
		setModalMode(identifier);
	}

	return (
		<>
			<Navbar
				setModalMode={setModalMode}
				handleOpenModal={handleOpenModal}
			/>
			<header className="mb-12">
				<img
					src="/stopwatchLogo.svg"
					alt="stopwatch.png"
					className="w-50 text-center m-auto mb-8"
				/>
			</header>
			<main>
				<Stopwatch />
				<AuthModal
					modalMode={modalMode}
					setModalMode={setModalMode}
					handleOpenModal={handleOpenModal}
				/>
				{/* <SaveModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
			</main>
		</>
	);
}

export default MainCounterPage;
