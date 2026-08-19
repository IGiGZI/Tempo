import MainCounterPage from "./pages/MainCounterPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" index element={<MainCounterPage/>}/>
				<Route path="profile" element={<ProfilePage/>}/>
			</Routes>
		</>
	);
}

export default App;
