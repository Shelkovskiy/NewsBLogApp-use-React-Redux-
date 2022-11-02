import React from "react";
import CustomText from "../../components/common-components/Text";
import ComponentsContainer from "../../components/common-components/Container/index";

const NotFoundPage = () => {
	return (
		<ComponentsContainer margin="60px auto 10px">
			<CustomText fontsize="56" color="red">
				Sorry,this page is not found
			</CustomText>
		</ComponentsContainer>
	);
};

export default NotFoundPage;
