import {
	GET_ASYNC_BLOGS_START,
	GET_ASYNC_BLOGS_SUCCESS,
	GET_ASYNC_BLOGS_FAILURE,
	SET_CURRENT_PAGE,
} from "../../action";
import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { GET_ASYNC_TOTAL_COUNT } from '../../action/index';

export type TBlogsActionTypes =
	| IGetAsyncBlogsStartAction
	| IGetAsyncBlogsSuccessAction
	| IGetAsyncBlogsFailureAction
	| ISetCurrentPageAction
	| IGetAsyncTotalCount;

interface IGetAsyncBlogsStartAction {
	type: typeof GET_ASYNC_BLOGS_START;
	payload: IAsyncBlogsResponseData;
}

interface IGetAsyncBlogsSuccessAction {
	type: typeof GET_ASYNC_BLOGS_SUCCESS;
	payload: IAsyncBlogsResponseData[];
}

interface IGetAsyncBlogsFailureAction {
	type: typeof GET_ASYNC_BLOGS_FAILURE;
	payload: string;
}

interface ISetCurrentPageAction {
	type: typeof SET_CURRENT_PAGE
	payload: number;
}

interface IGetAsyncTotalCount {
	type :typeof GET_ASYNC_TOTAL_COUNT,
	payload:number;
}


