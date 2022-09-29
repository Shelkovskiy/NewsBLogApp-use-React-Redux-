const URL = "https://api.spaceflightnewsapi.net/v3/articles";

export const getPostsArr = async () => {
	const PostsAPIrequesJSON = await fetch(URL);
	const response = await PostsAPIrequesJSON.json();
	return response;
};
