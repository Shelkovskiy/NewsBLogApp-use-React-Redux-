import { URL_ARTICLES } from "../../constants";
import { URL_BLOGS } from "../../constants";

export const getPostsArr = async () => {
	const PostsAPIrequesJSON = await fetch(URL_ARTICLES);
	const response = await PostsAPIrequesJSON.json();
	return response;
};

export const getNewsArr = async () => {
	const PostsAPIrequesJSON = await fetch(URL_BLOGS);
	const response = await PostsAPIrequesJSON.json();
	return response;
};

export const getSignglePosts = async (id:string) => {
	const PostsAPIrequesJSON = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
	const response = await PostsAPIrequesJSON.json();
	return response;
};
