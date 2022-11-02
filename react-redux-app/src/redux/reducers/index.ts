import { combineReducers } from "redux";
import { blogReducer } from "./blogsReducer";
import { newsReducer } from "./newsReducer/index";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	blogs: blogReducer,
	news: newsReducer,
	auth: authReducer,
});
export default rootReducer;
