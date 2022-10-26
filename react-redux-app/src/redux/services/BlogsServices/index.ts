import axios from "axios";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { BASE_BLOG_URL } from "../../constants/urls";

export const getAsyncBlogsFromApi = (currentPage: number) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?_limit=12&_start=${currentPage}`,
	);
};

export const getAsyncBlogsCount = () => {
	return axios.get<number>(`${BASE_BLOG_URL}/v3/articles/count`);
};

export const blogsSearch = (value: string) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?title_contains=${value}`,
	);
};

export const getSignglePosts = async (id: string) => {
	const postsAPIrequesJSON = await fetch(`${BASE_BLOG_URL}/v3/articles/${id}`);
	const response = await postsAPIrequesJSON.json();
	return response;
};
