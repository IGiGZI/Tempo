import Stopwatch from "../components/Stopwatch";
// import NewTimeUnit from "../components/newTimeUnit"

function MainCounterPage() {
	return (
		<>
			<div className="flex items-center justify-center min-h-screen text-center">
				<div className="">
					<Stopwatch/>
				</div>
			</div>
		</>
	);
}

export default MainCounterPage;
