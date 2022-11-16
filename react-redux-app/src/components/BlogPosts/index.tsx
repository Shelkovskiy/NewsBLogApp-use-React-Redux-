import React, { useEffect, useCallback, useState } from "react";
import List from "../common-components/UserList/List";
import Loader from "../common-components/Loader/Loader";
import useWindowSize, { useAppSelector } from "../../redux/hooks/index";
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
	sortBlogSelector,
	filterBlogSelector,
} from "../../redux/selectors/blogsSelector/index";
import Button from "../common-components/Button";
import { Page, PaginationContainer } from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch } from "../../redux/hooks/index";
import { useDispatch } from "react-redux";
import { usePagination } from "../Pagination/createPagesFUnc";
import WarningText from "../common-components/warningText";
import {
	OPTION,
	PAGE_SIZE,
	SIBLING_COUNT,
	SortItemArr,
	SORT_OPTION,
} from "../../constants";
import { SortContainer, SortWrapper } from "../SortContainer";
import styled from "styled-components";
import Select from "../Select";
import Headers from "../common-components/Layout/Headers";
import { Form } from "../common-components/Form";
import SearchForm from "../SearchForm";

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

const BlogPosts = () => {
	const blogs = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);
	const errorMessage = useAppSelector(errorSelector);
	const currentPage: number = useAppSelector(currentPageSelector);
	const totalCount = useAppSelector(totalCountSelector);
	const sort = useAppSelector(sortBlogSelector);
	const filter = useAppSelector(filterBlogSelector);
	const size = useWindowSize();

	const pagination = usePagination({
		currentPage,
		PAGE_SIZE,
		SIBLING_COUNT,
		totalCount,
	});

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotalAsyncCount());
		dispatch(getAsyncBlogs(currentPage, filter, sort));
	}, []);

	const onPageChange = useCallback(
		async (currentPage: number) => {
			dispatch(getAsyncBlogs(currentPage, filter, sort));
		},
		[currentPage, dispatch, sort],
	);

	const onSortItemChange = useCallback(
		async (e: React.ChangeEvent<HTMLSelectElement>) => {
			dispatch(getAsyncBlogs(currentPage, filter, e.target.value));
		},
		[dispatch, currentPage],
	);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<SortWrapper>
						{size.width < 321 && <SearchForm />}
						{size.width > 768 ? (
							<SortContainer>
								{SortItemArr.map((item) => {
									return <SortItem key={item}>{item}</SortItem>;
								})}
							</SortContainer>
						) : (
							<Select option={SORT_OPTION} />
						)}
						<Select option={OPTION} value={sort} onChange={onSortItemChange} />
					</SortWrapper>
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
