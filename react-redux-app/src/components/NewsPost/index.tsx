import React, { useEffect } from "react";
import Loader from "../common-components/Loader/Loader";
import List from "../common-components/UserList/List";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/index";
import {
	newsSelectors,
	isLoadingNewsSelector,
	errorNewsSelector,
	currentPageSelector,
	perPageSelector,
	totalCountSelector,
} from "../../redux/selectors/newsSelector";
import {
	getAsyncNews,
	getTotalAsyncNewsCount,
} from "../../redux/action/newsActionCreators/index";
import WarningText from "../common-components/warningText";
import { createPages } from "../Pagination/createPagesFUnc";
import ComponentsContainer from "../common-components/Container";
import Button from "../common-components/Button";
import { Page } from "../Pagination";
import { setCurrentNewsPage } from "../../redux/action/newsActionCreators/index";

const NewsPosts = () => {
	const thunkDispatch: ThunkDispatch<{}, {}, any> = useDispatch();
	const news = useAppSelector(newsSelectors);
	const isLoading = useAppSelector(isLoadingNewsSelector);
	const errorMessage = useAppSelector(errorNewsSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const perPage = useAppSelector(perPageSelector);
	const totalCount = useAppSelector(totalCountSelector);
	const pageCount = Math.ceil(totalCount / perPage);

	const pages: number[] = [];
	createPages({ pages, pageCount, currentPage });

	useEffect(() => {
		const NewsPosts = async () => {
			thunkDispatch(getAsyncNews({ currentPage }));
		};
		NewsPosts();

		const totalCountPage = async () => {
			thunkDispatch(getTotalAsyncNewsCount());
		};
		totalCountPage();
	}, [currentPage]);

	return isLoading ? (
		<Loader />
	) : (
		<>
			{errorMessage && (
				<WarningText style={{ color: "red", fontSize: "18px" }}>
					{errorMessage}
				</WarningText>
			)}
			<List items={news} />
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
					width="400px"
					display="flex"
					justifyContent="space-between"
				>
					{pages.map((page, index) => {
						return (
							<Page
								key={index}
								isSelected={page === currentPage}
								onClick={() => thunkDispatch(setCurrentNewsPage(page))}
							>
								{page}
							</Page>
						);
					})}
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
		</>
	);
};

export default React.memo(NewsPosts);
