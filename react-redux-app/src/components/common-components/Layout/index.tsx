import React from "react";
import Header from "./Headers/index";
import Footer from "./Footer/index";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContent = styled.main`
	position: relative;
`;

const Layout = () => {
	return (
		<>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
};

export default React.memo(Layout);
