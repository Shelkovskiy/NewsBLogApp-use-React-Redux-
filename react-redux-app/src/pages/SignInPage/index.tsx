import react from "react";
import styled from "styled-components";
import CustomText from "../../components/common-components/Text";
import SignIN from "../../components/SignInForm";
import { CustomLnk } from "../../components/common-components/CustomLink";
import ComponentsContainer from "../../components/common-components/Container/index";

const SignInPage = () => {
	return (
		<ComponentsContainer margin="60px 0 0">
			<ComponentsContainer maxWidth="1120px" margin="0 auto 70px">
				<ComponentsContainer width="186px">
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
						Sign In
					</CustomText>
				</ComponentsContainer>
				<SignIN />
			</ComponentsContainer>
		</ComponentsContainer>
	);
};

export default SignInPage;
