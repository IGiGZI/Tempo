import Navbar from "../components/Navbar";
import { useTimeMarks } from "../context/TimeMarksContext";
import { useEffect } from "react";

function ProfilePage() {
	const { timeMarks, fetchTimeMarks, handleDeleteClick } = useTimeMarks();
	console.log(timeMarks);

	useEffect(() => {
		fetchTimeMarks();
	}, [fetchTimeMarks]);

	function timeConversion(totalMs) {
		let formattedTime = {
			hours: Math.floor(totalMs / 1000 / (60 * 60))
				.toString()
				.padStart(2, "0"),
			minutes: (Math.floor(totalMs / 1000 / 60) % 60)
				.toString()
				.padStart(2, "0"),
			seconds: (Math.floor(totalMs / 1000) % 60)
				.toString()
				.padStart(2, "0"),
			centisec: (Math.floor(totalMs / 10) % 100)
				.toString()
				.padStart(2, "0"),
		};
		return formattedTime;
	}

	console.log(timeConversion(3341));

	return (
		<>
			<Navbar />
			<main className="mt-12">
				<div>
					<h1 className="text-center text-6xl mb-22">
						Time marks Saved
					</h1>
					{timeMarks ? (
						<div className="w-96 m-auto flex flex-col gap-3.5">
							{timeMarks.map((timeMark, index) => {
								let currentDuration = timeConversion(
									timeMark.duration,
								);
								return (
									<div
										className="bg-[#707070] rounded p-3.5 text-2xl text-center"
										key={index}
									>
										<h1 className="mb-4">
											Time Mark: {index + 1}
										</h1>
										<p className="mb-4">
											{currentDuration.hours}:
											{currentDuration.minutes}:
											{currentDuration.seconds}:
											{currentDuration.centisec}
										</p>
										{timeMark.note && (
											<p>Saved note : {timeMark.note}</p>
										)}
										<button
											onClick={() => {handleDeleteClick(timeMark._id)}}
											className="bg-[#454545] hover:bg-red-400 rounded p-3.5 m-2 cursor-pointer disabled:cursor-not-allowed w-26"
										>
											Delete
										</button>
									</div>
								);
							})}
						</div>
					) : (
						<h2>There no saved time-marks.</h2>
					)}
				</div>
			</main>
		</>
	);
}

export default ProfilePage;
