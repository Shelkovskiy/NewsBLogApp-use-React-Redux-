import { combineReducers, createStore,applyMiddleware } from 'redux';
import postsReducer from './postsReducer/index';


const rootReducer = combineReducers({
	posts: postsReducer
});

// export type RootState = ResultType<typeof rootReducer>;

export default rootReducer;
