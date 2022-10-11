import { Dispatch, ActionCreator } from "redux";
import axios from "axios";
import {
	GET_ASYNC_NEWS_FAILURE,
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_TOTAL_COUNT_NEWS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { BASE_BLOG_URL, } from "../../constants/URLS";
import { TNewsActionTypes } from "../../Types/AsyncNewsActionType/index";
import { SET_CURRENT_NEWS_PAGE } from "../index";

export const getAsyncNewsStart: ActionCreator<TNewsActionTypes> = () => {
	return {
		type: GET_ASYNC_NEWS_START,
		payload: {},
	};
};

export const getAsyncNewsSuccess: ActionCreator<TNewsActionTypes> = (
	Blogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_NEWS_SUCCESS,
		payload: Blogs,
	};
};

export const getAsyncNewsFailure = (error: string) => {
	return {
		type: GET_ASYNC_NEWS_FAILURE,
		payload: error,
	};
};

export const setCurrentNewsPage: ActionCreator<TNewsActionTypes> = (
	page: number,
) => {
	return {
		type: SET_CURRENT_NEWS_PAGE,
		payload: page,
	};
};

export const getAsyncTotalCount: ActionCreator<TNewsActionTypes> = (
	count: number,
) => {
	return {
		type: GET_ASYNC_TOTAL_COUNT_NEWS,
		payload: count,
	};
};

export const getAsyncNews = ({ currentPage }: any) => {
	return (dispatch: Dispatch<TNewsActionTypes>) => {
		dispatch(getAsyncNewsStart());
		axios
			.get<IAsyncBlogsResponseData[]>(
				`${BASE_BLOG_URL}/v3/blogs?_limit=12&_start=${currentPage}`,
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
				console.log(result);
				dispatch(getAsyncNewsSuccess(result));
			})
			.catch((error) => {
				dispatch(getAsyncNewsFailure(error?.message));
			});
	};
};

export const getTotalAsyncNewsCount = () => {
	return (dispatch: Dispatch<TNewsActionTypes>) => {
		dispatch(getAsyncTotalCount());
		axios.get<number>(`${BASE_BLOG_URL}/v3/blogs/count`).then((res) => {
			dispatch(getAsyncTotalCount(res.data));
		});
	};
};
