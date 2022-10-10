import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { GET_ASYNC_NEWS_FAILURE } from "../../action/index";
import {
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
} from "../../action/index";

export type IInitialState = {
	news: IAsyncBlogsResponseData[];
	isLoading: boolean;
	error: null | string;
};

const initialState: IInitialState = {
	news: [],
	isLoading: false,
	error: null,
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
		default:
			return state;
	}
};
