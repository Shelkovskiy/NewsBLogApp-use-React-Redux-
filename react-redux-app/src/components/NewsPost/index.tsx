import React, { useState, useEffect } from "react";
import { IPost } from "../Types/BlogType";
import List from "../common-components/UserList/List";
import Loader from "../common-components/Loader/Loader";
import { getNewsArr } from "../API/getPostApi";

const NewsPosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [blogs, setBlogs] = useState<IPost[] | []>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				const response = await getNewsArr();
				console.log(response)
				setBlogs(response);
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPosts();
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<>
			<List items={blogs} />
		</>
	);
};

export default React.memo(NewsPosts);
