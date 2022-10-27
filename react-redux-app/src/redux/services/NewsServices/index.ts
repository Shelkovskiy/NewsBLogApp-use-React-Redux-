import axios from "axios";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { BASE_BLOG_URL } from "../../constants/urls";

export const getAsyncNewsFromApi = ({
	currentPage = 1,
	limit = 12,
}: {
	currentPage?: number;
	limit?: number;
}) => {
	return axios.get<IAsyncBlogsResponseData[]>(
		`${BASE_BLOG_URL}/v3/blogs?_limit=${limit}&_start=${
			limit * (currentPage - 1)
		}`,
	);
};

export const getAsyncNewsCount = () => {
	return axios.get<number>(`${BASE_BLOG_URL}/v3/blogs/count`);
};
