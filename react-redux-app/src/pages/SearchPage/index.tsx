import React from "react";
import ComponentsContainer from "../../components/common-components/Container";
import CustomText from "../../components/common-components/Text";

const Searchpage = () => {
	return (
		<ComponentsContainer
			maxWidth="1120px"
			margin="60px auto 0"
			padding="0px 0px 10px "
		>
			<ComponentsContainer maxWidth="100%" margin="0px 0px 64px">
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
				<div>
					{/* <List items={filterBlogs} /> */}
				</div>
			</ComponentsContainer>
		</ComponentsContainer>
	);
};
export default Searchpage;
