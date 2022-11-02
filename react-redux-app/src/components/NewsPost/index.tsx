import React, { useEffect } from "react";
import Loader from "../common-components/Loader/Loader";
import List from "../common-components/UserList/List";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/index";
import {
	newsSelectors,
	isLoadingNewsSelector,
	errorNewsSelector,
	currentPageSelector,
	totalCountSelector,
} from "../../redux/selectors/newsSelector";
import {
	getAsyncNews,
	getTotalAsyncNewsCount,
} from "../../redux/action/newsActionCreators/index";
import WarningText from "../common-components/warningText";
import ComponentsContainer from "../common-components/Container";
import Button from "../common-components/Button";
import { Page } from "../Pagination";
import { AppDispatch } from "../../redux/hooks/index";
import { usePagination } from "../Pagination/createPagesFUnc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PAGE_SIZE, SIBLING_COUNT } from "../../constants";

const NewsPosts = () => {
	const dispatch: AppDispatch = useDispatch();
	const news = useAppSelector(newsSelectors);
	const isLoading = useAppSelector(isLoadingNewsSelector);
	const errorMessage = useAppSelector(errorNewsSelector);
	const currentPage: number = useAppSelector(currentPageSelector);

	const totalCount = useAppSelector(totalCountSelector);

	const onPageChange = (currentPage: number) => {
		dispatch(getAsyncNews(currentPage));
	};

	const pagination = usePagination({
		currentPage,
		PAGE_SIZE,
		SIBLING_COUNT,
		totalCount,
	});

	useEffect(() => {
		dispatch(getTotalAsyncNewsCount());
		dispatch(getAsyncNews(currentPage));
	}, [dispatch, currentPage]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{errorMessage && <WarningText>{errorMessage}</WarningText>}
					<List items={news} />
					<ComponentsContainer
						width="100%"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Button
							disabled={currentPage <= 1}
							onClick={() => onPageChange(currentPage - 1)}
							background="none"
							border="none"
							color="#313037"
							fontFamily="Inter"
							fontSize="16"
							fontWeight="600"
						>
							<FontAwesomeIcon icon={faArrowLeft} /> Prev
						</Button>
						<ComponentsContainer
							width="600px"
							display="flex"
							justifyContent="space-between"
						>
							{pagination!.map((page) => {
								return (
									<Page
										key={page}
										isSelected={page === currentPage}
										onClick={() => onPageChange(page as number)}
									>
										{page}
									</Page>
								);
							})}
						</ComponentsContainer>
						<Button
							disabled={currentPage >= totalCount}
							onClick={() => onPageChange(currentPage + 1)}
							background="none"
							color="#313037"
							fontFamily="Inter"
							border="none"
							fontSize="16"
							fontWeight="600"
						>
							Next <FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</ComponentsContainer>
				</>
			)}
		</>
	);
};

export default React.memo(NewsPosts);
