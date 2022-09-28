import React from "react";
import CustomText from "../../components/common-components/Text";
import styled from "styled-components";

const PageContanier = styled.div`
	margin: auto;
	width: 700px;
`;

const NotFoundPage = () => {
	return (
		<PageContanier>
			<CustomText fontsize="56" color="red">
				Sorry,this page is not found
			</CustomText>
		</PageContanier>
	);
};
export default NotFoundPage;
