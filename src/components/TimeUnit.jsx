import { useState } from "react";
import { useRef } from "react";


function TimeUnit() {
	const [timeState, setTimeState] = useState(0);
	const [isTimeRunning, setIsTimeRunning] = useState(false);

	const elapsedTime = useRef();
	const timeInterval = useRef();

	function handleStart() {
		// This fixes the double start issue logically
		if (isTimeRunning === true) {
			return;
		}

		console.log(`handleStart CLICKED`);

		let startTime;

		// Fixing 2 running intervals logically & calculating the new startTime after stopping
		if (elapsedTime.current > 0) {
			startTime = Date.now() - elapsedTime.current;
		} else {
			startTime = Date.now();

			// Testing as if the counter had started a little over 2 hours ago
			// startTime = Date.now() - 7198000;
		}

		setIsTimeRunning(true);

		timeInterval.current = setInterval(() => {
			elapsedTime.current = Date.now() - startTime;
			setTimeState(elapsedTime.current);
		}, 10);
	}

	function handleStop() {
		console.log(
			`handleStop() timeInterval.current : ${timeInterval.current}`,
		);
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		timeInterval.current = null;
	}

	function handleReset() {
		console.log(
			`handleReset() timeInterval.current : ${timeInterval.current}`,
		);
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		setTimeState(0);
		elapsedTime.current = 0;
		timeInterval.current = null;
	}

	return (
		<>
			<div>
				<div className="flex items-center justify-center gap-6 mb-6">
					<div>
						<p>
							{Math.floor(timeState / 1000 / (60 * 60))
								.toString()
								.padStart(2, "0")}
						</p>
						<p className="text-xl">HOURS</p>
					</div>
					<p>:</p>
					<div>
						<p>
							{Math.floor((timeState / 1000 / 60) % 60)
								.toString()
								.padStart(2, "0")}
						</p>
						<p className="text-xl">MINUTES</p>
					</div>
					<p>:</p>
					<div>
						<p>
							{Math.floor((timeState / 1000) % 60)
								.toString()
								.padStart(2, "0")}
						</p>
						<p className="text-xl">SECONDS</p>
					</div>
					<p>:</p>
					<div>
						<p>
							{Math.floor((timeState % 1000) / 10)
								.toString()
								.padStart(2, "0")}
						</p>
						<p className="text-xl">CENTISECONDS</p>
					</div>
				</div>

				<button
					onClick={handleStart}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#707070]"
				>
					{isTimeRunning === false ? "Start" : "Running"}
				</button>
				<button
					onClick={handleStop}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
				>
					Stop
				</button>
				<button
					onClick={() => {
						console.log(`RESET CLICKED`);
						handleReset();
					}}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer"
				>
					Reset
				</button>
				<button className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer">
					Lap
				</button>
			</div>
		</>
	);
}

export default TimeUnit;
