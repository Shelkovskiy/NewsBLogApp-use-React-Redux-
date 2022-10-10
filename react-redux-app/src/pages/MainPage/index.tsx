import React from "react";
import BlogPosts from "../../components/BlogPosts/index";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import styled from "styled-components";
import {
	NavWrap,
	NavWrapItem,
} from "../../components/common-components/Navigation";

const SortItem = styled.div`
	text-align: center;
	list-style-type: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	background: rgba(49, 48, 55, 0.1);
	border-radius: 4px;
	padding: 16px 40px;
	gap: 4px;
	color: #313037;
	:hover {
		background: rgba(108, 27, 219, 1);
		color: #ffffff;
	}
`;

export const MainPage = () => {
	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
				<div>
					<CustomText
						fontweight="700"
						fontsize="56"
						lineheight="80"
						color="#313037"
						margin="0px 0px 40px"
						alignItems="center"
						width="123px"
					>
						Blog
					</CustomText>
				</div>
				<NavWrap>
					<CustomLnk textDecoration="none" to="/MainPage">
						<NavWrapItem>Blog</NavWrapItem>
					</CustomLnk>
					<CustomLnk textDecoration="none" to="/newspage">
						<NavWrapItem>News</NavWrapItem>
					</CustomLnk>
				</NavWrap>
			</ComponentsContainer>
			<ComponentsContainer
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<ComponentsContainer
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width="535px"
				>
					<SortItem>Day</SortItem>
					<SortItem>Week</SortItem>
					<SortItem>Monath</SortItem>
					<SortItem>Year</SortItem>
				</ComponentsContainer>
				<SortItem>SORT</SortItem>
			</ComponentsContainer>
			<div>
				<BlogPosts />
			</div>
		</ComponentsContainer>
	);
};
export default MainPage;
