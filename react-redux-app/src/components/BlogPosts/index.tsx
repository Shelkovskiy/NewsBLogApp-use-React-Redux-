import React, { useEffect } from "react";
import List from "../common-components/UserList/List";
import Loader from "../common-components/Loader/Loader";
import { useAppSelector } from "../../redux/hooks/index";
import {
	getAsyncBlogs,
	getTotalAsyncCount,
} from "../../redux/action/blogsActionCreators/index";
import ComponentsContainer from "../common-components/Container/index";
import {
	isLoadingSelector,
	blogSelectors,
	errorSelector,
	currentPageSelector,
	totalCountSelector,
} from "../../redux/selectors/blogsSelector/index";
import Button from "../common-components/Button";
import { Page, PaginationContainer } from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch } from "../../redux/hooks/index";
import { useDispatch } from "react-redux";
import { usePagination } from "../Pagination/createPagesFUnc";
import WarningText from "../common-components/warningText";
import { PAGE_SIZE, SIBLING_COUNT } from "../../constants";

const BlogPosts = () => {
	const blogs = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);
	const errorMessage = useAppSelector(errorSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const totalCount = useAppSelector(totalCountSelector);

	const pagination = usePagination({
		currentPage,
		PAGE_SIZE,
		SIBLING_COUNT,
		totalCount,
	});

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotalAsyncCount());
		dispatch(getAsyncBlogs(currentPage));
	}, [currentPage, dispatch]);

	const onPageChange = (currentPage: number) => {
		dispatch(getAsyncBlogs(currentPage));
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{errorMessage && <WarningText>{errorMessage}</WarningText>}
					<List items={blogs} />
					<ComponentsContainer
						display="flex"
						justifyContent="center"
						gap="10px"
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
						<PaginationContainer>
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
						</PaginationContainer>
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

export default React.memo(BlogPosts);
