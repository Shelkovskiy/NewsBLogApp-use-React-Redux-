import { Dispatch, ActionCreator } from "redux";
import axios from "axios";
import {
	GET_ASYNC_BLOGS_FAILURE,
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { BASE_BLOG_URL, URL_ARTICLES_COUNT } from "../../constants/URLS";
import { TBlogsActionTypes } from "../../Types/AsyncBlogActionType";
import { SET_CURRENT_PAGE, GET_ASYNC_TOTAL_COUNT } from "../index";

export const getAsyncBlogsStart: ActionCreator<TBlogsActionTypes> = () => {
	return {
		type: GET_ASYNC_BLOGS_START,
		payload: {},
	};
};

export const getAsyncBlogsSuccess: ActionCreator<TBlogsActionTypes> = (
	Blogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_BLOGS_SUCCESS,
		payload: Blogs,
	};
};

export const getAsyncBlogsFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_FAILURE,
		payload: error,
	};
};

export const setCurrentPage: ActionCreator<TBlogsActionTypes> = (
	page: number,
) => {
	return {
		type: SET_CURRENT_PAGE,
		payload: page,
	};
};

export const getAsyncTotalCount: ActionCreator<TBlogsActionTypes> = (
	count: number,
) => {
	return {
		type: GET_ASYNC_TOTAL_COUNT,
		payload: count,
	};
};

export const getAsyncBlogs = ({ currentPage }: any) => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncBlogsStart());
		axios
			.get<IAsyncBlogsResponseData[]>(
				`${BASE_BLOG_URL}/v3/articles?_limit=12&_start=${currentPage}`,
			)
			.then((res) => {
				const result = res.data.map((el) => ({
					id: el.id,
					featured: el.featured,
					title: el.title,
					url: el.url,
					imageUrl: el.imageUrl,
					newsSite: el.newsSite,
					summary: el.summary,
					publishedAt: el.publishedAt,
					launches: el.launches,
					events: el.events,
				}));
				dispatch(getAsyncBlogsSuccess(result));
				console.log(result);
			})
			.catch((error) => {
				dispatch(getAsyncBlogsFailure(error?.message));
			});
	};
};

export const getTotalAsyncCount = () => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncTotalCount());
		axios.get<number>(URL_ARTICLES_COUNT).then((res) => {
			dispatch(getAsyncTotalCount(res.data));
		});
	};
};
