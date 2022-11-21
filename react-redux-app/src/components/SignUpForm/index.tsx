import React, { useCallback, useState, useEffect, FocusEvent } from "react";
import Button from "../common-components/Button";
import Input from "../common-components/Input";
import { Form, FormLabel } from "../common-components/Form/index";
import ComponentsContainer from "../common-components/Container";
import { registration } from "../../redux/services/authServices";
import WarningText from "../common-components/warningText";
import { CustomLnk } from "../common-components/CustomLink";
import CustomText from "../common-components/Text";
import Loader from "../common-components/Loader/Loader";
import { IAuthRequestRegistrationData } from "../../redux/Types/authTypes";

const prevUserData: IAuthRequestRegistrationData = {
	username: "",
	email: "",
	password: "",
};

const SignUp = () => {
	const [registrationFormData, setRegistrationFormData] =
		useState(prevUserData);
	const [isRegistered, setIsRegistered] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsloading] = useState(false);
	const [userNameDirty, setUserNameDirty] = useState(false);
	const [userNameError, setUserNameError] = useState(
		"Username cannot be empty",
	);
	const [emailDirty, setEmailDirty] = useState(false);
	const [emailError, setEmailError] = useState("Email cannot be empty");
	const [passwordDiry, setPasswordDirty] = useState(false);
	const [passwordError, setPasswordError] = useState(
		"Password cannot be empty",
	);

	const [formValid, setFormValid] = useState(false);

	const onUserDataChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setRegistrationFormData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
			switch (e.target.name) {
				case "name":
					const reName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
					if (!reName.test(String(e.target.value))) {
						setUserNameError("Incorrect username");
						if (!e.target.value) {
							setUserNameError("Username cannot be empty");
						} else {
							setUserNameError("");
						}
					}
					break;
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
							"Password must not be shorter than 3 or more than 25 characters",
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
		[
			registrationFormData.username,
			registrationFormData.email,
			registrationFormData.password,
		],
	);

	const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "name":
				setUserNameDirty(true);
				break;
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
		}
	};

	useEffect(() => {
		if (emailError || passwordError || userNameError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError]);

	const onRegistrationFormSubmit = useCallback(
		async (e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			try {
				setIsloading(true);
				const response = await registration({
					username: registrationFormData.username,
					email: registrationFormData.email,
					password: registrationFormData.password,
				});
				if (response.data) {
					setIsRegistered(true);
					setRegistrationFormData(prevUserData);
				}
			} catch (e: any) {
				const [values] = Object.values(e?.response?.data).flat();
				setErrorMessage(values as string);
			} finally {
				setIsloading(false);
			}
		},
		[registrationFormData],
	);

	return (
		<>
			{errorMessage && <WarningText>{errorMessage}</WarningText>}
			<>
				{isRegistered ? (
					<>
						<CustomText>Please check email to verify your account</CustomText>
						<CustomLnk to="/activate/:uid/:id">
							<Button>Go to activation page</Button>
						</CustomLnk>
					</>
				) : (
					<>
						{!isLoading ? (
							<>
								<Form maxwidth="624" maxheigth="550" margin="auto" padding="40">
									<ComponentsContainer margin="0 auto 10px">
										<FormLabel htmlFor="name">
											Username
											<Input
												onBlur={(e) => blurHandler(e)}
												name="name"
												height="56px"
												border="1px solid rgba(49, 48, 55, 0.1) "
												placeholder="Your username"
												value={registrationFormData.username}
												fieldName="username"
												onChange={onUserDataChange}
											/>
											{userNameDirty && userNameError && (
												<WarningText>{userNameError}</WarningText>
											)}
										</FormLabel>
										<FormLabel htmlFor="email">
											Email
											<Input
												onBlur={(e) => blurHandler(e)}
												name="email"
												height="56px"
												border="1px solid rgba(49, 48, 55, 0.1) "
												placeholder="Your email"
												value={registrationFormData.email}
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
												value={registrationFormData.password}
												fieldName="password"
												onChange={onUserDataChange}
											/>
											{passwordDiry && passwordError && (
												<WarningText>{passwordError}</WarningText>
											)}
										</FormLabel>
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
										type="button"
										onClick={onRegistrationFormSubmit}
										disabled={!formValid}
									>
										Sign Up
									</Button>
								</Form>
							</>
						) : (
							<Loader />
						)}
					</>
				)}
			</>
		</>
	);
};

export default React.memo(SignUp);
