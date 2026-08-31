import Modal from "./Modal";
import { useRef, useState } from "react";
import { useLaps } from "../context/LapContext";

function SaveModal({ isOpen, setIsOpen, onSave, elapsedTimeRef, lapHistoryState }) {
	const textAreaRef = useRef();
	const [saveStatus, setSaveStatus] = useState(null);
	const [modalLoader, setmodalLoader] = useState(3);

	const { handleSaveLap } = useLaps()

	async function handleSave() {
		try {
			const savedTimeMark = await onSave({
				duration: elapsedTimeRef.current,
				note: textAreaRef.current.value,
			});

			for (const lap of lapHistoryState){
				await handleSaveLap({})
			}
			setSaveStatus("Saved successfully!");

			const closingInterval = setInterval(() => {
				setmodalLoader((prev) => {
					if (prev === 0) {
						clearInterval(closingInterval);
						setIsOpen(false)
					}
					return prev - 1;
				});
			}, 1000);

		} catch (err) {
			console.log(err);
			setSaveStatus("Error, Could not save.");
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				setIsOpen(false);
				setSaveStatus(null);
			}}
		>
			<div className="bg-[#222222] p-8 rounded-3xl text-center w-full">
				<h1 className="text-3xl mb-6">Add a note (optional).</h1>
				<textarea
					ref={textAreaRef}
					className="border-3 border-[#000000] outline-0 p-3 rounded-xl w-full mb-6"
				></textarea>
				{saveStatus === "Saved successfully!" && (
					<p className="mb-6 text-green-500">
						Saved successfully! Closing in {modalLoader}s.
					</p>
				)}
				{saveStatus === "Error, Could not save." && (
					<p className="mb-6 text-red-500">Error, Could not save.</p>
				)}
				<button
					onClick={handleSave}
					className="bg-[#454545] hover:bg-[#707070] rounded-2xl p-3.5 cursor-pointer w-full font-bold text-2xl"
				>
					Save
				</button>
			</div>
		</Modal>
	);
}

export default SaveModal;
