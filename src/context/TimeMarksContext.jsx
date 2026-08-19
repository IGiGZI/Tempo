import { createContext, useState, useContext } from "react";
import { createTimeMark } from "../api/timemarks";

export const timeMarksCtx = createContext();

export function TimeMarkContextProvider({ children }) {
	const [timeMarks, setTimeMarks] = useState([]);

	async function handleSave({ duration, note }) {
    console.log(`handleSave fired`);
		const response = await createTimeMark({ duration, note });
		setTimeMarks((prevTimemarks) => {
			return [
				...prevTimemarks,
				{ duration: response.duration, note: response.note },
			];
		});
	}

	const values = {
		handleSave,
		timeMarks,
	};

	return (
		<timeMarksCtx.Provider value={values}>{children}</timeMarksCtx.Provider>
	);
}

export function useTimeMarks() {
	const values = useContext(timeMarksCtx);

	if (values === undefined) {
		throw new Error("Failed to get values from time marks context");
	} else return values;
}
