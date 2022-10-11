import React, { useEffect, useState } from "react";
import List from "../common-components/UserList/List";
import Loader from "../common-components/Loader/Loader";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
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
	perPageSelector,
	totalCountSelector,
} from "../../redux/selectors/BlogsSelector/index";
import Button from "../common-components/Button";
import { Page } from "../Pagination";
import { setCurrentPage } from "../../redux/action/blogsActionCreators/index";
import { createPages } from "../Pagination/createPagesFUnc";

const BlogPosts = () => {
	const thunkDispatch: ThunkDispatch<{}, {}, any> = useDispatch();
	const blogs = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);
	const errorMessage = useAppSelector(errorSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const perPage = useAppSelector(perPageSelector);
	const totalCount = useAppSelector(totalCountSelector);
	const pageCount = Math.ceil(totalCount / perPage);

	const pages: number[] = [];
	createPages({ pages, pageCount, currentPage });

	useEffect(() => {
		const BlogsPosts = async () => {
			thunkDispatch(getAsyncBlogs({ currentPage }));
		};
		BlogsPosts();
	}, [currentPage]);

	useEffect(() => {
		const totalCountPage = async () => {
			thunkDispatch(getTotalAsyncCount());
		};
		totalCountPage();
	}, [currentPage]);

	return isLoading ? (
		<Loader />
	) : (
		<>
			{errorMessage && (
				<ComponentsContainer
					width="300px"
					margin="20px auto "
					fontSize="20"
					color="red"
				>
					{errorMessage}
				</ComponentsContainer>
			)}
			<List items={blogs} />
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
								onClick={() => thunkDispatch(setCurrentPage(page))}
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

export default React.memo(BlogPosts);
