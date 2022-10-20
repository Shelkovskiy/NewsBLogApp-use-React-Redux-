import { combineReducers } from "redux";
import { blogReducer } from "./blogsReducer";
import { newsReducer } from "./newsReducer/index";

const rootReducer = combineReducers({
	blogs: blogReducer,
	news: newsReducer,
});
export default rootReducer;
