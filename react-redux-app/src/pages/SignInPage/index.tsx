import react from "react";
import styled from "styled-components";
import CustomText from "../../components/common-components/Text";
import { Link } from "react-router-dom";
import SignIN from "../../components/SignInForm";

const LoginFormContainer = styled.div`
	max-width: 1120px;
	margin: auto;
	margin-bottom: 70px;
`;

const TextContainer = styled.div`
	width: 186px;
`;

const LoginPageContainer = styled.div`
	margin-top: 60px;
`;

interface ILink {
	textDecoration?: string;
}

const CustomLnk = styled(Link)<ILink>`
	text-decoration: ${(p) => p.textDecoration};
`;

const SignInPage = () => {
	return (
		<LoginPageContainer>
			<LoginFormContainer>
				<TextContainer>
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
				</TextContainer>
				<SignIN />
			</LoginFormContainer>
		</LoginPageContainer>
	);
};

export default SignInPage;
