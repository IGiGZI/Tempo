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

		console.log(
			`This lap's time -> ${hours}:${minutes}:${seconds}:${centisec}`,
		);

		setLapHistoryState((prevValues) => {
			const updatedLapHistory = [
				...prevValues,
				{
					hours: hours,
					minutes: minutes,
					seconds: seconds,
					centisec: centisec,
				},
			];
			console.log(updatedLapHistory);
			return updatedLapHistory;
		});
	}

	return (
		<>
			<div>
				<TimeUnit
					handleLap={handleLap}
					elapsedTimeRef={elapsedTimeRef}
				/>
				<div>
					<Lap
						lapHistoryState={lapHistoryState}
						setLapHistoryState={setLapHistoryState}
					/>
				</div>
			</div>
		</>
	);
}

export default Stopwatch;