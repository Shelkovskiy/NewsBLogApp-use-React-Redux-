import React, {
	useCallback,
	useEffect,
	useState,
	useMemo,
	FocusEvent,
} from "react";
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
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDiry, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState("Email cannot be empty");
	const [passwordError, setPasswordError] = useState(
		"Password cannot be empty",
	);
	const [formValid, setFormValid] = useState(false);

	const onUserDataChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUserData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
			switch (e.target.name) {
				case "email":
					const reEmail =
						/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
					if (!reEmail.test(String(e.target.value))) {
						setEmailError("Incorrect email");
						if (!e.target.value) {
							setEmailError("Email cannot be empty");
						}
					} else {
						setEmailError("");
					}
					break;
				case "password":
					if (e.target.value.length < 3 || e.target.value.length > 25) {
						setPasswordError(
							" Password must not be shorter than 3 or more than 25 characters",
						);
						if (!e.target.value) {
							setPasswordError("Password cannot be empty");
						}
					} else {
						setPasswordError("");
					}
					break;
			}
		},
		[userData.email, userData.password],
	);

	const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
		}
	};

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

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError]);

	return (
		<>
			{errorMessage && <WarningText>{errorMessage}</WarningText>}
			{!isAuthLoading ? (
				<>
					<Form maxheigth="472" margin="auto" padding="40">
						<ComponentsContainer margin="0 0 20px">
							<FormLabel htmlFor="email">
								Email
								<Input
									onBlur={(e) => blurHandler(e)}
									name="email"
									height="56px"
									border="1px solid rgba(49, 48, 55, 0.1) "
									placeholder="Your email"
									value={userData.email}
									fieldName="email"
									onChange={onUserDataChange}
								/>
								{emailDirty && emailError && (
									<WarningText>{emailError}</WarningText>
								)}
							</FormLabel>
							<FormLabel htmlFor="password">
								Password
								<Input
									onBlur={(e) => blurHandler(e)}
									height="56px"
									border="1px solid rgba(49, 48, 55, 0.1) "
									name="password"
									placeholder="Your password"
									value={userData.password}
									fieldName="password"
									onChange={onUserDataChange}
								/>
							</FormLabel>
							{passwordDiry && passwordError && (
								<WarningText>{passwordError}</WarningText>
							)}
						</ComponentsContainer>
						<Button
							fontSize="18"
							fontWeight="600"
							background="#6C1BDB"
							width="100%"
							fontFamily="Inter"
							lineheight="24"
							color="#FFFFFF"
							padding="16px 32px"
							border="none"
							borderRadius="4"
							type="button"
							onClick={onFormSubmit}
							disabled={!formValid}
						>
							Sign In
						</Button>
						<ComponentsContainer
							justifyContent="center"
							maxWidth="256"
							display="flex"
							margin="10px auto"
							alignItems="center"
						>
							<CustomText
								width="200px"
								fontsize="16"
								fontfamily="Inter"
								fontweight="500"
								color="#8D8E97"
								margin="start"
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
									fontWeight="600"
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
