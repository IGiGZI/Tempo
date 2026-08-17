import { Fragment, useState } from "react";
import { useRef } from "react";

function TimeUnit({ handleLap, elapsedTimeRef, setLapHistoryState }) {
	const [timeState, setTimeState] = useState(0);
	const [isTimeRunning, setIsTimeRunning] = useState(false);

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

		// console.log(`handleStart CLICKED`);

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
		// console.log(
		// 	`handleStop() timeInterval.current : ${timeInterval.current}`,
		// );
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		timeInterval.current = null;
	}

	function handleReset() {
		// console.log(
		// 	`handleReset() timeInterval.current : ${timeInterval.current}`,
		// );
		setIsTimeRunning(false);
		clearInterval(timeInterval.current);
		setTimeState(0);
		elapsedTimeRef.current = 0;
		timeInterval.current = null;
		setLapHistoryState([]);
	}

	return (
		<>
			<div className="counter text-7xl font-extrabold mb-12">
				<div className="flex items-center justify-center gap-6 mb-6">
					{timeUnitsArray.map((element, index) => {
						return (
							<Fragment key={element.label}>
								<div>
									<p>{element.timeFn(timeState)}</p>
									<p className="text-xl">{element.label}</p>
								</div>
								{index < timeUnitsArray.length - 1 && <p>:</p>}
							</Fragment>
						);
					})}
				</div>

				{!isTimeRunning && (
					<button
						onClick={handleStart}
						className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer w-36"
					>
						<img src="playSvg.svg" alt="" />
					</button>
				)}

				{isTimeRunning && (
					<button
						onClick={handleStop}
						className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer w-36"
					>
						<img src="pauseSvg.svg" alt="" />
					</button>
				)}

				<button
					onClick={() => {
						// console.log(`RESET CLICKED`);
						handleReset();
					}}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer w-36"
				>
					<img src="/resetSvg.svg" alt="" />
				</button>

				<button
					onClick={handleLap}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer disabled:cursor-not-allowed w-36"
					disabled={isTimeRunning === false}
				>
					<img src="/lapSvg.svg" alt="" />
				</button>
				<button className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer disabled:cursor-not-allowed w-36">
					<img src="/saveSvg.svg" alt="" />
				</button>
			</div>
		</>
	);
}

export default TimeUnit;
