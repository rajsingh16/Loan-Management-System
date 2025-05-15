import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/loginPage";
import HomePage from "./pages/homePage";
import RegisterPage from "./pages/registerPage";
import Dashboard from "./pages/dashboard";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginSuccess = () => {
		setIsLoggedIn(true);
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={<Login onLoginSuccess={handleLoginSuccess} />}
				/>
				<Route
					path="/register"
					element={
						<RegisterPage onLoginSuccess={handleLoginSuccess} />
					}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route
					path="/home"
					element={
						isLoggedIn ? <HomePage /> : <Navigate to="/login" />
					}
				/>
				<Route
					path="/"
					element={
						isLoggedIn ? (
							<Navigate to="/dashboard" />
						) : (
							<Navigate to="/home" />
						)
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
