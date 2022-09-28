import React, { useState, useEffect } from "react";
import "./index.css";
import { getPostsArr } from "../API/getPostApi";
import List from "../common-components/UserList/List";
import styled from "styled-components";

export interface IPost {
	id?: number;
	featured: boolean;
	title?: string;
	url?: string;
	imageUrl?: string;
	newsSite?: string;
	summary?: string;
	publishedAt?: string;
	launches: [
		{
			id: string;
			provider: string;
		},
	];
	events: [
		{
			id: string;
			provider: string;
		},
	];
}

const Loader = styled.div`
	margin: auto;
	border: 10px solid #f3f3f3;
	border-top: 10px solid #3498db;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 1s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const BlogPosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState<IPost[] | []>([]);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				const response = await getPostsArr();
				setPosts(response);
				console.log(response);
				setIsLoading(false);
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
		<Loader></Loader>
	) : (
		<>
			<List items={posts} />
		</>
	);
};

export default BlogPosts;
