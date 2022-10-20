import { GET_ASYNC_TOTAL_COUNT_FAILURE } from "../../action/index";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import {
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
	GET_ASYNC_BLOGS_FAILURE,
	GET_ASYNC_SEARCH_BLOGS_START,
	GET_ASYNC_BLOGS_SEARCH_SUCCESS,
	GET_ASYNC_BLOGS_SEARCH_FAILURE,
	SET_CURRENT_PAGE,
	GET_ASYNC_TOTAL_COUNT,
} from "../../action/index";

export type IInitialState = {
	blogs: IAsyncBlogsResponseData[];
	isLoading: boolean;
	error: null | string;
	currentPage: number;
	perPage: number;
	totalCount: number;
	searchblogs: IAsyncBlogsResponseData[];
};

const initialState: IInitialState = {
	blogs: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	perPage: 12,
	totalCount: 0,
	searchblogs: [],
};

export const blogReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case GET_ASYNC_BLOGS_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_ASYNC_BLOGS_SUCCESS:
			return {
				...state,
				blogs: [...payload],
				isLoading: false,
				error: null,
			};
		case GET_ASYNC_BLOGS_FAILURE:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			};
		case GET_ASYNC_TOTAL_COUNT:
			return {
				...state,
				totalCount: payload,
			};
		case GET_ASYNC_SEARCH_BLOGS_START:
			return {
				...state,
				searchblogs: [],
				isLoading: true,
			};
		case GET_ASYNC_BLOGS_SEARCH_SUCCESS:
			return {
				...state,
				searchblogs: [...payload],
				isLoading: false,
				error: null,
			};
		case GET_ASYNC_BLOGS_SEARCH_FAILURE:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case GET_ASYNC_TOTAL_COUNT_FAILURE:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
