import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common-components/Layout/index";
import PersistLogin from "./components/PersistLogin";
import ActivationPage from "./pages/ActivationPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Searchpage from "./pages/SearchPage";
import SelectedPage from "./pages/SelectedPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Navigate replace to="/signinpage" />} />
				<Route path="/signinpage" element={<SignInPage />} />
				<Route path="/signupage" element={<SignUpPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/activate/:uid/:id" element={<ActivationPage />} />
				<Route path="/selectedpage/:id" element={<SelectedPage />} />
				<Route element={<PersistLogin />}>
					<Route path="/mainpage" element={<MainPage />} />
					<Route path="/newspage" element={<NewsPage />} />
					<Route path="/searchpage" element={<Searchpage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
