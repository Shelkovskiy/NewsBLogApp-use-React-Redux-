import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common-components/Layout/index";
import { MainPage } from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import Searchpage from "./pages/SearchPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Navigate replace to="/mainpage" />} />
				<Route path="/mainpage" element={<MainPage />} />
				<Route path="/searchpage" element={<Searchpage />} />
				<Route path="/signinpage" element={<SignInPage />} />
				<Route path="/signupage" element={<SignUpPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
