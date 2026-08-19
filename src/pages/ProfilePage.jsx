import Navbar from "../components/Navbar";
import { useTimeMarks } from "../context/TimeMarksContext";

function ProfilePage() {
	const { timeMarks } = useTimeMarks();
	console.log(timeMarks);
	
	return (
		<>
			<Navbar />
			<main>
				<div>
					<h1 className="text-center text-6xl">Time-marks Saved</h1>
					{timeMarks ? (
						<div>
							<div className="">
							{}
							</div>
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
