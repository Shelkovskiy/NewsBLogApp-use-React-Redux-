import React, { useEffect, useMemo } from "react";
import Loader from "../common-components/Loader/Loader";
import List from "../common-components/UserList/List";
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
import { AppDispatch } from "../../redux/hooks/index";

const NewsPosts = () => {
	const dispatch: AppDispatch = useDispatch();
	const news = useAppSelector(newsSelectors);
	const isLoading = useAppSelector(isLoadingNewsSelector);
	const errorMessage = useAppSelector(errorNewsSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const perPage = useAppSelector(perPageSelector);
	const totalCount = useAppSelector(totalCountSelector);

	const pageCount = useMemo(() => {
		const count = Math.ceil(totalCount / perPage);
		return count;
	}, [totalCount]);

	const pages: number[] = [];
	createPages({ pages, pageCount, currentPage });

	useEffect(() => {
		dispatch(getAsyncNews({ currentPage }));
		dispatch(getTotalAsyncNewsCount());
	}, [currentPage]);

	return (
		<>
			{isLoading ? (
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
										onClick={() => dispatch(setCurrentNewsPage(page))}
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
			)}
		</>
	);
};

export default React.memo(NewsPosts);
