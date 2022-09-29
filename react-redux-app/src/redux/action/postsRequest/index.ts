import axios from "axios";
import { setPosts } from "../../reducers/postsReducer";
import { URL_ARTICLES } from "../../../components/constants";

export const getPosts = () => {
	return async (dispatch: any) => {
		const response = axios.get(URL_ARTICLES);
		dispatch(setPosts((await response).data));
		console.log((await response).data);
	};
};
