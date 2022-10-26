import {
	getAsyncBlogsFromApi,
	getAsyncBlogsCount,
	blogsSearch,
} from "../../services/BlogsServices";
import { Dispatch, ActionCreator } from "redux";
import {
	GET_ASYNC_BLOGS_FAILURE,
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { TBlogsActionTypes } from "../../Types/asyncBlogActionType";
import {
	SET_CURRENT_PAGE,
	GET_ASYNC_TOTAL_COUNT,
	GET_ASYNC_SEARCH_BLOGS_START,
	GET_ASYNC_BLOGS_SEARCH_SUCCESS,
	GET_ASYNC_BLOGS_SEARCH_FAILURE,
} from "../index";

export const getAsyncBlogsStart: ActionCreator<TBlogsActionTypes> = () => {
	return {
		type: GET_ASYNC_BLOGS_START,
		payload: {},
	};
};

export const getAsyncBlogsSearchStart: ActionCreator<
	TBlogsActionTypes
> = () => {
	return {
		type: GET_ASYNC_SEARCH_BLOGS_START,
		payload: {},
	};
};

export const getAsyncBlogsSuccess: ActionCreator<TBlogsActionTypes> = (
	blogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_BLOGS_SUCCESS,
		payload: blogs,
	};
};

export const getAsyncBlogsSearchSuccess: ActionCreator<TBlogsActionTypes> = (
	searchblogs: IAsyncBlogsResponseData[],
) => {
	return {
		type: GET_ASYNC_BLOGS_SEARCH_SUCCESS,
		payload: searchblogs,
	};
};

export const getAsyncBlogsFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_FAILURE,
		payload: error,
	};
};

export const getAsyncBlogsSearchFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_SEARCH_FAILURE,
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

export const getAsyncCountFailure = (error: string) => {
	return {
		type: GET_ASYNC_BLOGS_FAILURE,
		payload: error,
	};
};

export const getAsyncBlogs = ( currentPage : number) => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncBlogsStart());
		getAsyncBlogsFromApi( currentPage )
			.then((res) => {
				dispatch(getAsyncBlogsSuccess(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncBlogsFailure(error?.message));
			});
	};
};

export const getTotalAsyncCount = () => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		getAsyncBlogsCount()
			.then((res) => {
				dispatch(getAsyncTotalCount(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncCountFailure(error?.message));
			});
	};
};

export const getAsyncBlogsSearch = (value: string) => {
	return (dispatch: Dispatch<TBlogsActionTypes>) => {
		dispatch(getAsyncBlogsSearchStart());
		blogsSearch(value)
			.then((res) => {
				dispatch(getAsyncBlogsSearchSuccess(res.data));
			})
			.catch((error) => {
				dispatch(getAsyncBlogsSearchFailure(error?.message));
			});
	};
};
