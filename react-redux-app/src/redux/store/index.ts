import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, compose, applyMiddleware } from "redux";

const composeEnhancers =
	process.env.NODE_ENV !== "production" &&
	typeof window === "object" &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const configureStore = (preloadedState: any) =>
	createStore(
		rootReducer, 
		preloadedState, 
		enhancer, 
	);

export const store = configureStore({});
