function Lap({ lapHistoryState, setLapHistoryState }) {
	const reversedArray = lapHistoryState.map((lap, index) => {
		let lapDiff;
		let timeDiff;

		if (index === 0) {
			timeDiff = lap.totalElapsedMs;
		} else {
			timeDiff =
				lap.totalElapsedMs - lapHistoryState[index - 1].totalElapsedMs;
		}

		lapDiff = {
			totalElapsedMs: timeDiff,
			hours: Math.floor(timeDiff / 1000 / (60 * 60)),
			minutes: Math.floor(timeDiff / 1000 / 60) % 60,
			seconds: Math.floor(timeDiff / 1000) % 60,
			centisec: Math.floor(timeDiff / 10) % 100,
		};

		console.log(`Next line will have totalElapsedMs`);
		console.log(lapHistoryState[index].totalElapsedMs + " Index" + index);

		return (
			<div
				key={index}
				className="flex justify-between bg-[#707070] rounded p-3.5 text-2xl"
			>
				<p>{index + 1}</p>
				<p>
					{lapDiff.hours.toString().padStart(2, "0")}:
					{lapDiff.minutes.toString().padStart(2, "0")}:
					{lapDiff.seconds.toString().padStart(2, "0")}:
					{lapDiff.centisec.toString().padStart(2, "0")}
				</p>
				<p>
					{lap.hours.toString().padStart(2, "0")}:
					{lap.minutes.toString().padStart(2, "0")}:
					{lap.seconds.toString().padStart(2, "0")}:
					{lap.centisec.toString().padStart(2, "0")}
				</p>
			</div>
		);
	});

	function handleLapReset() {
		setLapHistoryState([]);
	}

	return (
		<div>
			<div className="flex flex-col gap-3.5 max-h-92 overflow-y-auto overflow-x-hidden">
				{reversedArray.reverse()}
			</div>
			{lapHistoryState.length > 0 && (
				<button
					onClick={handleLapReset}
					className="bg-[#454545] hover:bg-[#707070] rounded p-3.5 m-2 cursor-pointer text-2xl"
				>
					Reset Laps
				</button>
			)}
		</div>
	);
}

export default Lap;
