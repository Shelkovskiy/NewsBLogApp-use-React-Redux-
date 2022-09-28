import React from "react";
import "./MainPage.css";
import BlogPosts from "../../components/BlogPosts/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/common-components/Button";

interface ILink {
	textDecoration?: string;
}

const CustomLnk = styled(Link)<ILink>`
	text-decoration: ${(props) => props.textDecoration};
`;

let totalPages: number[] = [1, 2, 3, 4, 5, 6];

export const MainPage = () => {
	return (
		<div className="container">
			<div className="main-title">
				<div>
					<h1 className="title">Blog</h1>
				</div>
				<div className="nav-wrap">
					<CustomLnk textDecoration="none" to="/MainPage">
						<div className="nav-wrap-item">Blog</div>
					</CustomLnk>

					<div className="nav-wrap-item">News</div>
				</div>
			</div>
			<div className="sort-container">
				<ul className="sort-wrap">
					<li className="sort-wrap-item">Day</li>
					<li className="sort-wrap-item">Week</li>
					<li className="sort-wrap-item">Monath</li>
					<li className="sort-wrap-item">Year</li>
				</ul>
				<div className="sort">SORT</div>
			</div>
			<div className="card-container">
				<BlogPosts />
			</div>
			<div className="pagination">
				<Button
					background="none"
					border="none"
					color="#313037"
					fontFamily="Inter"
					fontSize="16"
					fontWeight="600"
				>
					← Prev
				</Button>
				<div className="pages">
					{totalPages.map((page, index) => (
						<span key={index}>{page}</span>
					))}
				</div>
				<Button
					background="none"
					color="#313037"
					fontFamily="Inter"
					border="none"
					fontSize="16"
					fontWeight="600"
				>
					Next →
				</Button>
			</div>
		</div>
	);
};
export default MainPage;
