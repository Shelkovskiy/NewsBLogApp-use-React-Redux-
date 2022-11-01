import axios from "axios";
import { IAsyncBlogsResponseData } from "../../Types/responseType";
import { BASE_BLOG_URL } from "../../constants/urls";
import { axiosContent } from "../../../components/API";

export const getAsyncNewsFromApi = ({
	currentPage = 1,
	limit = 12,
}: {
	currentPage?: number | string;
	limit?: number;
}) => {
	return axiosContent.get<IAsyncBlogsResponseData[]>(
		`/v3/blogs?_limit=${limit}&_start=${limit * ((currentPage as number) - 1)}`,
	);
};

export const getAsyncNewsCount = () => {
	return axiosContent.get<number>(`/v3/blogs/count`);
};
