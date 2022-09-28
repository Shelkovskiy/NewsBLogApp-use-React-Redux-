import axios from "axios";
import { setPosts } from "../../reducers/postsReducer";

export const getPosts = () => {
	return async (dispatch:any) => {
		const response = axios.get(
			"https://api.spaceflightnewsapi.net/v3/articles",
		);
		dispatch(setPosts((await response).data));
      console.log((await response).data)
	};
};
