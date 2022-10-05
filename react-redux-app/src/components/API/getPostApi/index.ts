import { URL_ARTICLES } from "../../constants";

export const getPostsArr = async () => {
	const PostsAPIrequesJSON = await fetch(URL_ARTICLES);
	const response = await PostsAPIrequesJSON.json();
	return response;
};
