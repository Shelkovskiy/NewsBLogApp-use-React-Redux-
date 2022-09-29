import React from "react";
import CustomText from "../../components/common-components/Text";
import SignUp from "../../components/SignUpForm";
import ComponentsContainer from "../../components/common-components/Container";
import { CustomLnk } from "../../components/common-components/CustomLink/index";

const SignUpPage = () => {
	return (
		<ComponentsContainer margin="30 0 0">
			<ComponentsContainer maxWidth="1120px" margin="0 auto 20px">
				<ComponentsContainer maxWidth="212px" margin="20px 0 0">
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
					<CustomText
						fontfamily="Inter"
						fontsize="56"
						fontweight="700"
						alignItems="center"
						color="#313037"
						lineheight="80"
					>
						Sign Up
					</CustomText>
				</ComponentsContainer>
				<SignUp />
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default SignUpPage;
