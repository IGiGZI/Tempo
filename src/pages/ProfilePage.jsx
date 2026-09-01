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
			<main className="mt-12 px-4">
				<div>
					<h1 className="text-center text-4xl sm:text-6xl mb-12 sm:mb-22">
						Time marks Saved
					</h1>
					{timeMarks ? (
						<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
							{timeMarks.map((timeMark, index) => {
								return (
									<div
										className="bg-[#707070] rounded-2xl border border-white/10 shadow-lg shadow-black/30 p-5 text-center flex flex-col"
										key={timeMark._id ?? index}
									>
										<h1 className="text-xl font-semibold mb-3 tracking-wide">
											Time Mark: {index + 1}
										</h1>
										<p className="text-2xl font-mono mb-3">
											{formatTimeString(
												timeMark.duration,
											)}
										</p>
										{timeMark.note && (
											<p className="text-sm mb-3 text-white/80">
												Saved note : {timeMark.note}
											</p>
										)}

										{timeMark.laps &&
											timeMark.laps.length > 0 && (
												<div className="flex flex-col gap-2 mb-4">
													{timeMark.laps.map(
														(lap, lapIndex) => {
															const previousLapDiff =
																lapIndex === 0
																	? 0
																	: timeMark
																			.laps[
																			lapIndex -
																				1
																		]
																			.lapDiff;

															let diffColor;
															if (
																previousLapDiff ===
																0
															) {
																diffColor =
																	"text-black";
															} else if (
																lap.lapDiff >
																previousLapDiff
															) {
																diffColor =
																	"text-red-400";
															} else {
																diffColor =
																	"text-green-400";
															}

															return (
																<div
																	key={
																		lap.lapNum
																	}
																	className="bg-[#454545] rounded-lg p-2.5 text-sm flex justify-between items-center"
																>
																	<span className="text-base">
																		Lap{" "}
																		{
																			lap.lapNum
																		}
																	</span>
																	<span>
																		{formatTimeString(
																			lap.lapTime,
																		)}
																	</span>
																	<span
																		className={
																			diffColor
																		}
																	>
																		{formatTimeString(
																			lap.lapDiff,
																		)}
																	</span>
																</div>
															);
														},
													)}
												</div>
											)}

										<button
											onClick={() => {
												handleDeleteClick(timeMark._id);
											}}
											className="bg-[#454545] hover:bg-red-400 rounded-lg py-2.5 px-4 mt-auto cursor-pointer disabled:cursor-not-allowed w-full transition-colors"
										>
											Delete
										</button>
									</div>
								);
							})}
						</div>
					) : (
						<h2 className="text-center">There no saved time-marks.</h2>
					)}
				</div>
			</main>
		</>
	);
}

export default ProfilePage;