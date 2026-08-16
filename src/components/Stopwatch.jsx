import TimeUnit from "./TimeUnit";
import Lap from "./Lap";
import { useState, useRef } from "react";

function Stopwatch() {
	const [lapHistoryState, setLapHistoryState] = useState([]);

	const elapsedTimeRef = useRef();

	function handleLap() {
		let hours = Math.floor(elapsedTimeRef.current / 1000 / 60 / 60);
		let minutes = Math.floor((elapsedTimeRef.current / 1000 / 60) % 60);
		let seconds = Math.floor((elapsedTimeRef.current / 1000) % 60);
		let centisec = Math.floor((elapsedTimeRef.current / 10) % 100);

		// console.log(
		// 	`This lap's time -> ${hours}:${minutes}:${seconds}:${centisec}`,
		// );

		setLapHistoryState((prevValues) => {
			const updatedLapHistory = [
				...prevValues,
				{
					totalElapsedMs: elapsedTimeRef.current, 
					hours: hours,
					minutes: minutes,
					seconds: seconds,
					centisec: centisec,
				},
			];
			console.log(`Next line is updated lap history`);
			console.log(updatedLapHistory);
			return updatedLapHistory;
		});
	}

	return (
		<>
			<div className="flex justify-center items-center text-center">
				<TimeUnit
					handleLap={handleLap}
					elapsedTimeRef={elapsedTimeRef}
				/>
			</div>
			<div className="w-2xl text-center m-auto">
				<Lap
					lapHistoryState={lapHistoryState}
					setLapHistoryState={setLapHistoryState}
					elapsedTimeRef={elapsedTimeRef}
				/>
			</div>
		</>
	);
}

export default Stopwatch;
