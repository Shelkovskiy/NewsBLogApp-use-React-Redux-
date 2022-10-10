import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import {
	GET_ASYNC_BLOGS_FAILURE,
	SET_CURRENT_PAGE,
	GET_ASYNC_TOTAL_COUNT,
} from "../../action/index";
import {
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
} from "../../action/index";

export type IInitialState = {
	blogs: IAsyncBlogsResponseData[];
	isLoading: boolean;
	error: null | string;
	currentPage: number;
	perPage: number;
	totalCount: number;
};

const initialState: IInitialState = {
	blogs: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	perPage: 12,
	totalCount: 0,
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
		default:
			return state;
	}
};
