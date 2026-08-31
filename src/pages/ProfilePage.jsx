import Navbar from "../components/Navbar";
import { useTimeMarks } from "../context/TimeMarksContext";
import { useEffect } from "react";

function ProfilePage() {
	const { timeMarks, fetchTimeMarks, handleDeleteClick } = useTimeMarks();

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

	function formatTimeString(totalMs) {
		const t = timeConversion(totalMs);
		return `${t.hours}:${t.minutes}:${t.seconds}:${t.centisec}`;
	}

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
								return (
									<div
										className="bg-[#707070] rounded p-3.5 text-2xl text-center"
										key={timeMark._id ?? index}
									>
										<h1 className="mb-4">
											Time Mark: {index + 1}
										</h1>
										<p className="mb-4">
											{formatTimeString(timeMark.duration)}
										</p>
										{timeMark.note && (
											<p className="mb-4">
												Saved note : {timeMark.note}
											</p>
										)}

										{timeMark.laps && timeMark.laps.length > 0 && (
											<div className="flex flex-col gap-2 mb-4">
												{timeMark.laps.map((lap, lapIndex) => {
													const previousLapDiff =
														lapIndex === 0
															? 0
															: timeMark.laps[lapIndex - 1].lapDiff;

													let diffColor;
													if (previousLapDiff === 0) {
														diffColor = "text-black";
													} else if (lap.lapDiff > previousLapDiff) {
														diffColor = "text-red-400";
													} else {
														diffColor = "text-green-400";
													}

													return (
														<div
															key={lap.lapNum}
															className="bg-[#454545] rounded-lg p-2.5 text-base flex justify-between items-center"
														>
															<span className="text-lg">
																Lap {lap.lapNum}
															</span>
															<span>
																{formatTimeString(lap.lapTime)}
															</span>
															<span className={diffColor}>
																{formatTimeString(lap.lapDiff)}
															</span>
														</div>
													);
												})}
											</div>
										)}

										<button
											onClick={() => {
												handleDeleteClick(timeMark._id);
											}}
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