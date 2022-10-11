import {
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_NEWS_FAILURE,
} from "../../action";
import { IAsyncBlogsResponseData } from "../ResponseType";
import { SET_CURRENT_NEWS_PAGE, GET_ASYNC_TOTAL_COUNT_NEWS } from '../../action/index';

export type TNewsActionTypes =
	| IGetAsyncBlogsStartAction
	| IGetAsyncBlogsSuccessAction
	| IGetAsyncBlogsFailureAction
	|ISetCurrentNewsPageAction
	|IGetAsyncTotalCountNews;

interface IGetAsyncBlogsStartAction {
	type: typeof GET_ASYNC_NEWS_START;
	payload: IAsyncBlogsResponseData;
}

interface IGetAsyncBlogsSuccessAction {
	type: typeof GET_ASYNC_NEWS_SUCCESS;
	payload: IAsyncBlogsResponseData[];
}

interface IGetAsyncBlogsFailureAction {
	type: typeof GET_ASYNC_NEWS_FAILURE;
	payload: string;
}

export interface ISetCurrentNewsPageAction {
	type: typeof SET_CURRENT_NEWS_PAGE
	payload: number;
}

interface IGetAsyncTotalCountNews {
	type :typeof GET_ASYNC_TOTAL_COUNT_NEWS
	payload:number;
}

