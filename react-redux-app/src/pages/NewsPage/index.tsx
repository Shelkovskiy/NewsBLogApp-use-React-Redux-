import React from "react";
import Button from "../../components/common-components/Button";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import styled from "styled-components";
import {
	NavWrap,
	NavWrapItem,
} from "../../components/common-components/Navigation";
import { Page } from "../../components/Pagination";
import NewsPost from "../../components/NewsPost";

const totalPages: number[] = [1, 2, 3, 4, 5, 6];

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
					<CustomText
						fontweight="700"
						fontsize="56"
						lineheight="80"
						color="#313037"
						margin="0px 0px 40px"
						alignItems="center"
						width="123"
					>
						Blog
					</CustomText>
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
				<NewsPost />
			</div>
			<ComponentsContainer
				width="100%"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
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
				<ComponentsContainer
					width="179px"
					display="flex"
					justifyContent="space-between"
				>
					{totalPages.map((page, index) => (
						<Page key={index}>{page}</Page>
					))}
				</ComponentsContainer>
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
			</ComponentsContainer>
		</ComponentsContainer>
	);
};
export default NewsPage;
