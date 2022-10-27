import axios from "axios";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { BASE_BLOG_URL } from "../../constants/urls";

export const getAsyncBlogsFromApi = ({
	currentPage = 1,
	limit = 12,
}: {
	currentPage?: number;
	limit?: number;
}) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?_limit=${limit}&_start=${
			limit * (currentPage - 1)
		}`,
	);
};

export const getAsyncBlogsCount = () => {
	return axios.get<number>(`${BASE_BLOG_URL}/v3/articles/count`);
};

export const blogsSearch = ({ filter = "" }: { filter?: string }) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/articles?title_contains=${filter}`,
	);
};

export const getSignglePosts = async (id: string) => {
	const postsAPIrequesJSON = await fetch(`${BASE_BLOG_URL}/v3/articles/${id}`);
	const response = await postsAPIrequesJSON.json();
	return response;
};
