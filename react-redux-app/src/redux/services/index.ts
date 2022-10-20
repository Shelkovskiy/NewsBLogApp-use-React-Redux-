import axios from "axios";
import { BASE_BLOG_URL } from "../constants/URLS";
import { IAsyncBlogsResponseData } from "../Types/responseType";
import { URL_ARTICLES_COUNT } from "../constants/URLS";
// news
export const getAsyncNewsFromApi = ({ currentPage }: any) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/blogs?_limit=12&_start=${currentPage}`,
	);
};

export const getAsyncNewsCount = () => {
	return axios.get<number>(`${BASE_BLOG_URL}/v3/blogs/count`);
};

// blogs
export const getAsyncBlogsFromApi = ({ currentPage }: any) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?_limit=12&_start=${currentPage}`,
	);
};

export const getAsyncBlogsCount = () => {
	return axios.get<number>(URL_ARTICLES_COUNT);
};

//  search
export const blogsSearch = (value: string) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?title_contains=${value}`,
	);
};
