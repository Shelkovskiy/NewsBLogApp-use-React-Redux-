export const getSignglePosts = async (id: string) => {
	const PostsAPIrequesJSON = await fetch(
		`https://api.spaceflightnewsapi.net/v3/articles/${id}`,
	);
	const response = await PostsAPIrequesJSON.json();
	return response;
};

export {};
