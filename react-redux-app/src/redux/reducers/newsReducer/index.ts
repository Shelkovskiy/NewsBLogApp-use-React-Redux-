import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import {
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_NEWS_FAILURE,
	GET_ASYNC_TOTAL_COUNT_NEWS,
	SET_CURRENT_NEWS_PAGE

} from "../../action/index";

export type IInitialState = {
	news: IAsyncBlogsResponseData[];
	isLoading: boolean;
	error: null | string;
	currentPage: number;
	perPage: number;
	totalCount: number;
};

const initialState: IInitialState = {
	news: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	perPage: 12,
	totalCount: 0,
};

export const newsReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case GET_ASYNC_NEWS_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_ASYNC_NEWS_SUCCESS:
			return {
				...state,
				news: [...payload],
				isLoading: false,
				error: null,
			};
		case GET_ASYNC_NEWS_FAILURE:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
			case SET_CURRENT_NEWS_PAGE:
			return {
				...state,
				currentPage: payload,
			};
		case GET_ASYNC_TOTAL_COUNT_NEWS:
			return {
				...state,
				totalCount: payload,
			};
		default:
			return state;
	}
};
