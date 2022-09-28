export const getPostsArr = async () => {
	const PostsAPIrequesJSON = await fetch(
		"https://api.spaceflightnewsapi.net/v3/articles",
	);
	const response = await PostsAPIrequesJSON.json();
	return response;
};
