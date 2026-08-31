import { createContext, useState, useContext } from "react";
import { createTimeMark, getTimeMarks, deleteTimeMark } from "../api/timemarks";

export const timeMarksCtx = createContext();

export function TimeMarkContextProvider({ children }) {
	const [timeMarks, setTimeMarks] = useState([]);

	async function handleSave({ duration, note, laps }) {
    // console.log(`handleSave fired`);
		const response = await createTimeMark({ duration, note, laps });
		setTimeMarks((prevTimemarks) => {
			return [
				...prevTimemarks,
				{ duration: response.duration, note: response.note, laps: response.laps },
			];
		});
		return response
	}


	async function fetchTimeMarks(){
		const response = await getTimeMarks()
		console.log(response);
		setTimeMarks(response)
	}

	async function handleDeleteClick(id){
		await deleteTimeMark(id)
		fetchTimeMarks()
	}

	const values = {
		handleSave,
		timeMarks,
		fetchTimeMarks,
		handleDeleteClick
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
