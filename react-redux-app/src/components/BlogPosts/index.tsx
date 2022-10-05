import React, { useState, useEffect } from "react";
import { getPostsArr } from "../API/getPostApi";
import List from "../common-components/UserList/List";
import Loader from "../common-components/Loader/Loader";
import { IPost } from "../Types/BlogType";

const BlogPosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState<IPost[] | []>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				const response = await getPostsArr();
				setPosts(response);
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPosts();
	}, []);

	// const dispatch = useDispatch();
	// const blog = useSelector((state) => state.blog.items);
	return isLoading ? (
		<Loader />
	) : (
		<>
			<List items={posts} />
		</>
	);
};

export default React.memo(BlogPosts);
