import { Fragment, useState } from "react";
import { useRef } from "react";
import { useTimeMarks } from "../context/TimeMarksContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import SaveModal from "./SaveModal.jsx";

function TimeUnit({ handleLap, elapsedTimeRef, setLapHistoryState }) {
	const [timeState, setTimeState] = useState(0);
	const [isTimeRunning, setIsTimeRunning] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { isLoggedIn, setIsMenuOpen, setModalMode } = useAuth()

	const { handleSave } = useTimeMarks();

	function handleSaveClick() {
		if (isLoggedIn){
			isTimeRunning && handleStop();
			setIsOpen(true);
		} else {
			setModalMode("login")
			setIsMenuOpen(true)
		}
	}

	const timeInterval = useRef();

	const timeUnitsArray = [
		{
			label: "HOURS",
			timeFn: (t) => {
				t = Math.floor(timeState / 1000 / (60 * 60));
				return t.toString().padStart(2, "0");
			},
		},
		{
			label: "MINUTES",
			timeFn: (t) => {
				t = Math.floor((timeState / 1000 / 60) % 60);
				return t.toString().padStart(2, "0");
			},
		},
		{
			label: "SECONDS",
			timeFn: (t) => {
				t = Math.floor((timeState / 1000) % 60);
				return t.toString().padStart(2, "0");
			},
		},
		{
			label: "CENTISEC",
			timeFn: (t) => {
				t = Math.floor((timeState / 10) % 100);
				return t.toString().padStart(2, "0");
			},
		},
	];

	function handleStart() {
		// This fixes the double start issue logically
		if (isTimeRunning === true) {
			return;
		}

		let startTime;

		// Fixing 2 running intervals logically & calculating the new startTime after stopping
		if (elapsedTimeRef.current > 0) {
			startTime = Date.now() - elapsedTimeRef.current;
		} else {
			startTime = Date.now();

			// Testing as if the counter had started a little over 2 hours ago
			// startTime = Date.now() - 7198000;

			// Testing for time 2 mins and 58 sec
			// startTime = Date.now() - 178000;
		}

		setIsTimeRunning(true);

		timeInterval.current = setInterval(() => {
			elapsedTimeRef.current = Date.now() - startTime;
			setTimeState(elapsedTimeRef.current);
		}, 10);
	}

	function handleStop() {
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		timeInterval.current = null;
	}

	function handleReset() {
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		setTimeState(0);
		elapsedTimeRef.current = 0;
		timeInterval.current = null;
		setLapHistoryState([]);
	}

	return (
		<>
			<div className="counter text-3xl sm:text-5xl md:text-7xl font-extrabold mb-8 md:mb-12 px-4 w-full">
				<div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-6 flex-wrap">
					{timeUnitsArray.map((element, index) => {
						return (
							<Fragment key={element.label}>
								<div>
									<p>{element.timeFn(timeState)}</p>
									<p className="text-xs sm:text-base md:text-xl text-center">
										{element.label}
									</p>
								</div>
								{index < timeUnitsArray.length - 1 && <p>:</p>}
							</Fragment>
						);
					})}
				</div>

				<div className="flex flex-wrap justify-center gap-1 sm:gap-2">
					{!isTimeRunning && (
						<div className="flex flex-col items-center">
							<button
								onClick={handleStart}
								className="bg-[#454545] hover:bg-[#707070] rounded p-2 sm:p-3 md:p-3.5 m-1 sm:m-2 cursor-pointer w-16 sm:w-24 md:w-36"
							>
								<img src="playSvg.svg" alt="" />
							</button>
							<p className="text-lg sm:text-3xl md:text-5xl">Start</p>
						</div>
					)}

					{isTimeRunning && (
						<div className="flex flex-col items-center">
							<button
								onClick={handleStop}
								className="bg-[#454545] hover:bg-[#707070] rounded p-2 sm:p-3 md:p-3.5 m-1 sm:m-2 cursor-pointer w-16 sm:w-24 md:w-36"
							>
								<img src="pauseSvg.svg" alt="" />
							</button>
							<p className="text-lg sm:text-3xl md:text-5xl">Stop</p>
						</div>
					)}

					<div className="flex flex-col items-center">
						<button
							onClick={() => {
								handleReset();
							}}
							className="bg-[#454545] hover:bg-[#707070] rounded p-2 sm:p-3 md:p-3.5 m-1 sm:m-2 cursor-pointer w-16 sm:w-24 md:w-36"
						>
							<img src="/resetSvg.svg" alt="" />
						</button>
						<p className="text-lg sm:text-3xl md:text-5xl">Reset</p>
					</div>

					<div className="flex flex-col items-center">
						<button
							onClick={handleLap}
							className="bg-[#454545] hover:bg-[#707070] rounded p-2 sm:p-3 md:p-3.5 m-1 sm:m-2 cursor-pointer disabled:cursor-not-allowed w-16 sm:w-24 md:w-36"
							disabled={isTimeRunning === false}
						>
							<img src="/lapSvg.svg" alt="" />
						</button>
						<p className="text-lg sm:text-3xl md:text-5xl">Lap</p>
					</div>

					<div className="flex flex-col items-center">
						<button
							onClick={handleSaveClick}
							className="bg-[#454545] hover:bg-[#707070] rounded p-2 sm:p-3 md:p-3.5 m-1 sm:m-2 cursor-pointer disabled:cursor-not-allowed w-16 sm:w-24 md:w-36"
							
						>
							<img src="/saveSvg.svg" alt="" />
						</button>
						<p className="text-lg sm:text-3xl md:text-5xl">Save</p>
					</div>
				</div>
			</div>
			<SaveModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onSave={handleSave}
				elapsedTimeRef={elapsedTimeRef}
			/>
		</>
	);
}

export default TimeUnit;