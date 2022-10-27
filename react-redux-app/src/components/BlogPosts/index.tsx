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
import { Page } from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch } from "../../redux/hooks/index";
import { useDispatch } from "react-redux";
import { usePagination } from "../Pagination/createPagesFUnc";
import WarningText from "../common-components/warningText";

const BlogPosts = () => {
	const blogs = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);
	const errorMessage = useAppSelector(errorSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const totalCount = useAppSelector(totalCountSelector);

	const pageSize: number = 12;
	const siblingCount: number = 2;

	const pagination = usePagination({
		currentPage,
		pageSize,
		siblingCount,
		totalCount,
	});

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotalAsyncCount());
		dispatch(getAsyncBlogs(currentPage));
	}, [currentPage, dispatch]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{errorMessage && (
						<WarningText
							style={{
								color: "red",
								fontSize: "18px",
								margin: "10px auto 10px",
								width: "500px",
							}}
						>
							{errorMessage}
						</WarningText>
					)}
					<List items={blogs} />
					<ComponentsContainer
						width="100%"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Button
							disabled={currentPage <= 1}
							onClick={() => dispatch(getAsyncBlogs(currentPage - 1))}
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
										onClick={() => dispatch(getAsyncBlogs(page))}
									>
										{page}
									</Page>
								);
							})}
						</ComponentsContainer>
						<Button
							disabled={currentPage >= totalCount}
							onClick={() => dispatch(getAsyncBlogs(currentPage + 1))}
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
