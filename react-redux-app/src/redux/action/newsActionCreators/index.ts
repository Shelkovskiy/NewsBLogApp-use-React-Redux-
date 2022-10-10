import { Dispatch, ActionCreator } from "redux";
import axios from "axios";
import {
	GET_ASYNC_NEWS_FAILURE,
	GET_ASYNC_NEWS_START,
	GET_ASYNC_NEWS_SUCCESS,
} from "../index";
import { IAsyncBlogsResponseData } from "../../Types/ResponseType";
import { URL_NEWS } from "../../constants/URLS";
import { TNewsActionTypes } from '../../Types/AsyncNewsActionType/index';


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

export const getAsyncNews = () => {
	return (dispatch: Dispatch<TNewsActionTypes>) => {
		dispatch(getAsyncNewsStart());
		axios
			.get<IAsyncBlogsResponseData[]>(URL_NEWS)
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
				console.log(result)
				dispatch(getAsyncNewsSuccess(result));
			})
			.catch((error) => {
				dispatch(getAsyncNewsFailure(error?.message));
			});
	};
};
