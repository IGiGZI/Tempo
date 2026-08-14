import TimeUnit from "./TimeUnit";
import Lap from "./Lap";
import { useState, useRef } from "react";

function Stopwatch() {
	const [lapHistoryState, setLapHistoryState] = useState([]);

	const elapsedTime = useRef();

	function handleLap() {
		let hours = Math.floor(elapsedTime.current / 1000 / 60 / 60);
		let minutes = Math.floor((elapsedTime.current / 1000 / 60) % 60);
		let seconds = Math.floor((elapsedTime.current / 1000) % 60);
		let centisec = Math.floor((elapsedTime.current / 1000) % 10);

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
      return updatedLapHistory
		});
	}

	return (
		<>
			<TimeUnit handleLap={handleLap} elapsedTime={elapsedTime} />
			<Lap lapHistoryState={lapHistoryState} />
		</>
	);
}

export default Stopwatch;
