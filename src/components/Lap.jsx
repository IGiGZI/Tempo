function Lap({ lapHistoryState, setLapHistoryState }) {
	const reversedArray = lapHistoryState.map((element, index) => {
		return (
			<div
				key={index}
				className="flex justify-between bg-[#707070] rounded p-3.5 text-2xl"
			>
				<p>{index + 1}</p>
				<p>
					{element.hours.toString().padStart(2, "0")}:
					{element.minutes.toString().padStart(2, "0")}:
					{element.seconds.toString().padStart(2, "0")}:
					{element.centisec.toString().padStart(2, "0")}
				</p>
			</div>
		);
	});

	function handleLapReset() {
		setLapHistoryState([]);
	}

	return (
		<div>
			<div className="flex flex-col gap-3.5 max-h-48 overflow-y-auto overflow-x-hidden">
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
