import { Dispatch, ActionCreator } from "redux";
import axios from "axios";
import {
	GET_ASYNC_BLOGS_FAILURE,
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { URL_BLOGS, URL_BLOG_COUNT } from "../../constants/URLS";
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

export const getAsyncBlogs = () => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncBlogsStart());
		axios
			.get<IAsyncBlogsResponseData[]>(URL_BLOGS,)
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
			})
			.catch((error) => {
				dispatch(getAsyncBlogsFailure(error?.message));
			});
	};
};
// Я не понимаю какой тут должен быть запрос чтобы данные обновлялись 
// при при переходе между страницами 
export const getTotalAsyncCount = () => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncTotalCount());
		axios.get<number>(URL_BLOG_COUNT).then((res) => {
			dispatch(getAsyncTotalCount(res.data));
		});
	};
};
