import React, { useCallback, useEffect, useState } from "react";
import Button from "../common-components/Button";
import Input from "../common-components/Input";
import CustomText from "../common-components/Text";

import { Form, FormLabel } from "../common-components/Form/index";
import { CustomLnk } from "../common-components/CustomLink";
import ComponentsContainer from "../common-components/Container";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAsyncLoginData } from "../../redux/action/authActionCreators";
import {
	errorAuthSelector,
	isAuthSelector,
	isLoadingAuthSelector,
} from "../../redux/selectors/authSelectrors";
import WarningText from "../common-components/warningText";
import Loader from "../common-components/Loader/Loader";
import { useNavigate } from "react-router";
import { IAuthRequestLoginData } from "../../redux/Types/authTypes";

const prevUserData: IAuthRequestLoginData = { email: "", password: "" };

const SignIN = () => {
	const dispatch = useAppDispatch();
	const errorMessage = useAppSelector(errorAuthSelector);
	const isAuthLoading = useAppSelector(isLoadingAuthSelector);
	const [userData, setUserData] = useState(prevUserData);
	const isAuth = useAppSelector(isAuthSelector);
	const navigate = useNavigate();

	const onUserDataChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUserData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
		},
		[],
	);

	useEffect(() => {
		isAuth && navigate("/mainpage", { replace: true });
	}, [isAuth, navigate]);

	const onFormSubmit = useCallback(() => {
		dispatch(
			setAsyncLoginData({
				email: userData.email,
				password: userData.password,
			}),
		);
	}, [dispatch, userData.email, userData.password]);

	return (
		<>
			{errorMessage && <WarningText>{errorMessage}</WarningText>}
			{!isAuthLoading ? (
				<>
					<Form maxheigth="472" margin="auto" padding="40">
						<ComponentsContainer margin="0 0 48px">
							<FormLabel htmlFor="email">
								Email
								<Input
									name="email"
									height="56px"
									border="1px solid rgba(49, 48, 55, 0.1) "
									placeholder="Your email"
									value={userData.email}
									fieldName="email"
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
							background="rgba(108, 27, 219, 1)"
							width="100%"
							fontFamily="Inter"
							lineheight="24"
							color="#FFFFFF"
							padding="16px 32px"
							border="none"
							borderRadius="4"
							type="button"
							onClick={onFormSubmit}
						>
							Sign In
						</Button>
						<ComponentsContainer
							justifyContent="center"
							maxWidth="256"
							display="flex"
							margin="auto"
						>
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
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default React.memo(SignIN);
