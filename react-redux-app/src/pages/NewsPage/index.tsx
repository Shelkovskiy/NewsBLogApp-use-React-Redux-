import React from "react";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import styled from "styled-components";
import {
	NavWrap,
	NavWrapItem,
} from "../../components/common-components/Navigation";
import NewsPost from "../../components/NewsPost";
import { MainTitle } from "../../components/MainTitle";
import { SortContainer } from "../../components/SortContainer";

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

export const NewsPage = () => {
	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
				<div>
					<MainTitle>News</MainTitle>
				</div>
				<NavWrap>
					<CustomLnk textDecoration="none" to="/MainPage">
						<NavWrapItem>Blog</NavWrapItem>
					</CustomLnk>
					<NavWrapItem>News</NavWrapItem>
				</NavWrap>
			</ComponentsContainer>
			<ComponentsContainer
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<SortContainer>
					<SortItem>Day</SortItem>
					<SortItem>Week</SortItem>
					<SortItem>Monath</SortItem>
					<SortItem>Year</SortItem>
				</SortContainer>
				<SortItem>SORT</SortItem>
			</ComponentsContainer>
			<div>
				<NewsPost />
			</div>
		</ComponentsContainer>
	);
};

export default NewsPage;
