import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MainCounterPage from "./pages/MainCounterPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" index element={<MainCounterPage/>}/>
				<Route path="profile" element={<ProfilePage/>}/>
				<Route path="about" element={<AboutPage/>}/>
				<Route path="contact" element={<ContactPage/>}/>
			</Routes>
		</>
	);
}

export default App;
