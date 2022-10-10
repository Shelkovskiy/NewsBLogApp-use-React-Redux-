import {
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
	GET_ASYNC_NEWS_FAILURE,
} from "../../action";
import { IAsyncBlogsResponseData } from "../ResponseType";

export type TNewsActionTypes =
	| IGetAsyncBlogsStartAction
	| IGetAsyncBlogsSuccessAction
	| IGetAsyncBlogsFailureAction;

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
