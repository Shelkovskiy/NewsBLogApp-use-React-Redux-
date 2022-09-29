import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../common-components/Button";
import Input from "../common-components/Input";
import CustomText from "../common-components/Text";
import { SignInRequest } from "../API/SignInApi/index";
import { Form } from "../common-components/Form/index";
import { CustomLnk } from "../common-components/CustomLink";
import ComponentsContainer from "../common-components/Container";

export const FormLabel = styled.label`
	font-size: 16px;
	font-family: "Inter";
	font-weight: 600;
	line-height: 20px;
	color: #313037;
	display: flex;
	flex-direction: column;
	width: 100%;
	font-weight: 600;
	margin-bottom: 24px;
`;

export interface IData {
	login: string;
	password: string;
}

const prevUserData: IData = { login: "", password: "" };

const SignIN = () => {
	const [userData, setUserData] = useState(prevUserData);
	const onUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};
	const onFormSubmit = useCallback(async () => {
		try {
			const response = await SignInRequest(userData);
			console.log({ response });
		} catch (e) {
			console.error(e);
		} finally {
			setUserData(prevUserData);
		}
	}, [userData]);

	return (
		<Form maxwidth="624" maxheigth="472" margin="auto" padding="40">
			<ComponentsContainer margin="0 0 48px">
				<FormLabel htmlFor="email">
					Email
					<Input
						name="email"
						height="56px"
						border="1px solid rgba(49, 48, 55, 0.1) "
						placeholder="Your email"
						value={userData.login}
						fieldName="login"
						onChange={onUserDataChange}
					/>
				</FormLabel>
				<FormLabel htmlFor="password">
					Password
					<Input
						height="56px"
						border="1px solid rgba(49, 48, 55, 0.1) "
						name="password"
						placeholder="Your password"
						value={userData.password}
						fieldName="password"
						onChange={onUserDataChange}
					/>
				</FormLabel>
				<Button
					color="#313037"
					fontFamily="Inter"
					fontSize="16"
					lineheight="20"
					background="none"
					border="none"
					fontWeight="500"
				>
					Forgot password?
				</Button>
			</ComponentsContainer>
			<Button
				fontSize="18"
				fontWeight="600"
				background=" rgba(108, 27, 219, 1)"
				width="100%"
				fontFamily="Inter"
				lineheight="24"
				color="#FFFFFF"
				padding="16px 32px"
				border="none"
				borderRadius="4"
				type="submit"
				onClick={onFormSubmit}
			>
				Sign In
			</Button>
			<ComponentsContainer maxWidth="256" display="flex" margin="auto">
				<CustomText
					fontsize="16"
					fontfamily="Inter"
					fontweight="500"
					color="#8D8E97"
				>
					Don`t have an account?
				</CustomText>
				<CustomLnk to="/signupage">
					<Button
						border="none"
						color="rgba(108, 27, 219, 1)"
						background="none"
						fontFamily="Inter"
						fontSize="16"
						lineheight="20"
					>
						SignUp
					</Button>
				</CustomLnk>
			</ComponentsContainer>
		</Form>
	);
};

export default SignIN;
