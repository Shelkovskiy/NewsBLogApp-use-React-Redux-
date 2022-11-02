import React from "react";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";
import { useAppSelector } from "../../redux/hooks/index";
import {
	blogSelectors,
	isLoadingSelector,
} from "../../redux/selectors/blogsSelector/index";
import List from "../../components/common-components/UserList/List";
import Loader from "../../components/common-components/Loader/Loader";
import { CustomLnk } from "../../components/common-components/CustomLink";

const Searchpage = () => {
	const searchBlogsResult = useAppSelector(blogSelectors);
	const isLoading = useAppSelector(isLoadingSelector);

	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
				<ComponentsContainer width="100px">
					<CustomLnk to="/mainpage" textDecoration="none">
						<CustomText
							fontfamily="Inter"
							fontweight="400"
							fontsize="16"
							color="#313037"
							lineheight="24"
							cursor="pointer"
						>
							← Back to home
						</CustomText>
					</CustomLnk>
				</ComponentsContainer>
				<CustomText
					fontsize="56"
					lineheight="80"
					fontweight="700"
					color="#313037"
					width="734px"
					margin="start"
				>
					Search results
				</CustomText>
			</ComponentsContainer>
			<ComponentsContainer>
				{isLoading ? <Loader /> : <List items={searchBlogsResult} />}
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default Searchpage;
