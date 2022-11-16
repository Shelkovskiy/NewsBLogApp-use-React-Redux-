import React, { useCallback, useState } from "react";
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

	const onUserDataChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setRegistrationFormData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
		},
		[],
	);

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
												name="name"
												height="56px"
												border="1px solid rgba(49, 48, 55, 0.1) "
												placeholder="Your username"
												value={registrationFormData.username}
												fieldName="username"
												onChange={onUserDataChange}
											/>
										</FormLabel>
										<FormLabel htmlFor="email">
											Email
											<Input
												name="email"
												height="56px"
												border="1px solid rgba(49, 48, 55, 0.1) "
												placeholder="Your email"
												value={registrationFormData.email}
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
												value={registrationFormData.password}
												fieldName="password"
												onChange={onUserDataChange}
											/>
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
