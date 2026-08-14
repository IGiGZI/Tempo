function Lap({ lapHistoryState }) {
	return (
		<>
			<div>
				{lapHistoryState.map((element, index) => {
					return (
						<div
							key={index}
							className="flex justify-between bg-[#707070] rounded p-3.5 text-2xl mb-8"
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
				})}
			</div>
		</>
	);
}

export default Lap;
