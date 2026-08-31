import { createContext, useContext, useState } from "react";
import { createLap, getLaps } from "../api/lap";

export const lapCtx = createContext();

export function LapContextProvider({ children }) {
	const [laps, setLaps] = useState([]);

	async function handleSaveLap({ lapTime, lapDiff, lapNum, timeMark }) {
		try {
			const response = await createLap({
				lapTime,
				lapDiff,
				lapNum,
				timeMark,
			});
			setLaps((prevLaps) => {
				return [
					...prevLaps,
					{
						timeMark: response.timeMark,
						lapTime: response.lapTime,
						lapDiff: response.lapDiff,
						lapNum: response.lapNum,
					},
				];
			});
		} catch (err) {
			console.log(`Something went wrong`);
			console.log(err);
		}
	}

	async function fetchLaps(timeMarkId) {
		try {
			const response = await getLaps(timeMarkId);
			setLaps(response);
		} catch (err) {
			console.log(`Something went wrong`);
			console.log(err);
		}
	}

	const values = {
		laps,
		setLaps,
		handleSaveLap,
		fetchLaps,
	};
	return <lapCtx.Provider value={values}>{children}</lapCtx.Provider>;
}

export function useLaps() {
	const values = useContext(lapCtx);

	if (values === undefined) {
		throw new Error("Failed to get values from lap context");
	} else {
		return values;
	}
}
