import { GET_POSTS } from "../../action";

const defaulState = {
	items: [],
	isFetching: true,
};

export default function postsReducer(
	state = defaulState,
	{ type, payload }: any,
) {
	switch (type) {
		case GET_POSTS:
			return {
				...state,
				items:payload.articles
			}
		default:
			return state;
	}
}

export const setPosts = (posts:any) =>({type:GET_POSTS,payload:posts})
