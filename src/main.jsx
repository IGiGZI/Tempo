import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { TimeMarkContextProvider } from "./context/TimeMarksContext.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthContextProvider>
			<TimeMarkContextProvider>
				<App />
			</TimeMarkContextProvider>
		</AuthContextProvider>
	</BrowserRouter>,
);
