import axios from "axios";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { BASE_BLOG_URL } from "../../constants/urls";

export const getAsyncNewsFromApi = ({ currentPage }: any) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/blogs?_limit=12&_start=${currentPage}`,
	);
};

export const getAsyncNewsCount = () => {
	return axios.get<number>(`${BASE_BLOG_URL}/v3/blogs/count`);
};
