import React, { useEffect } from "react";
import Loader from "../common-components/Loader/Loader";
import List from "../common-components/UserList/List";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/index";
import {
	newsSelectors,
	isLoadingNewsSelector,
	errorNewsSelector,
} from "../../redux/selectors/NewsSelector";
import { getAsyncNews } from "../../redux/action/newsActionCreators/index";
import WarningText from "../common-components/warningText";

const NewsPosts = () => {
	const thunkDispatch: ThunkDispatch<{}, {}, any> = useDispatch();
	const news = useAppSelector(newsSelectors);
	const isLoading = useAppSelector(isLoadingNewsSelector);
	const errorMessage = useAppSelector(errorNewsSelector);

	useEffect(() => {
		const NewsPosts = async () => {
			thunkDispatch(getAsyncNews());
		};
		NewsPosts();
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<>
			{errorMessage && (
				<WarningText style={{ color: "red", fontSize: "18px" }}>
					{errorMessage}
				</WarningText>
			)}
			<List items={news} />
		</>
	);
};

export default React.memo(NewsPosts);
