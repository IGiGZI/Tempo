function Lap({ lapHistoryState, setLapHistoryState }) {
	const reversedArray = lapHistoryState.map((lap, index) => {
	let timeDiff = lap.lapDiff;
	let timeDiffColor;

	let lapDiff = {
		totalElapsedMs: timeDiff,
		hours: Math.floor(timeDiff / 1000 / (60 * 60)),
		minutes: Math.floor(timeDiff / 1000 / 60) % 60,
		seconds: Math.floor(timeDiff / 1000) % 60,
		centisec: Math.floor(timeDiff / 10) % 100,
	};

	let previousTimeDiff = index === 0 ? 0 : lapHistoryState[index - 1].lapDiff;

	if (previousTimeDiff === 0) {
		timeDiffColor = "text-black";
	} else if (timeDiff > previousTimeDiff) {
		timeDiffColor = "text-red-400";
	} else {
		timeDiffColor = "text-green-400";
	}

	return (
		<div key={index} className="flex justify-between bg-[#707070] rounded p-3.5 text-2xl">
			<div>
				<p className="text-lg">Lap NO.</p>
				<p>{lap.lapNum}</p>
			</div>
			<div>
				<p className="text-lg">Lap-to-lap difference</p>
				<p className={timeDiffColor}>
					{lapDiff.hours.toString().padStart(2, "0")}:
					{lapDiff.minutes.toString().padStart(2, "0")}:
					{lapDiff.seconds.toString().padStart(2, "0")}:
					{lapDiff.centisec.toString().padStart(2, "0")}
				</p>
			</div>
			<div>
				<p className="text-lg">Lap time</p>
				<p>
					{lap.hours.toString().padStart(2, "0")}:
					{lap.minutes.toString().padStart(2, "0")}:
					{lap.seconds.toString().padStart(2, "0")}:
					{lap.centisec.toString().padStart(2, "0")}
				</p>
			</div>
		</div>
	);
});

	function handleLapReset() {
		setLapHistoryState([]);
	}

	return (
		<div className="w-full">
	<div className="flex flex-col gap-3 sm:gap-3.5 max-h-92 overflow-y-auto overflow-x-hidden">
		{reversedArray.reverse()}
	</div>
	{lapHistoryState.length > 0 && (
		<button
			onClick={handleLapReset}
			className="bg-[#454545] hover:bg-[#707070] rounded p-3 sm:p-3.5 m-2 cursor-pointer text-lg sm:text-2xl"
		>
			Reset Laps
		</button>
	)}
</div>
	);
}

export default Lap;
