import Header from "./Headers/index";
import Footer from "./Footer/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
