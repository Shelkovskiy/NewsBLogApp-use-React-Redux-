import { BASE_BLOG_URL } from "../../../redux/constants/URLS";

export const getSignglePosts = async (id: string) => {
	const postsAPIrequesJSON = await fetch(`${BASE_BLOG_URL}/v3/articles/${id}`);
	const response = await postsAPIrequesJSON.json();
	return response;
};
