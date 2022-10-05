import React, { useCallback, useState } from "react";
import Button from "../common-components/Button";
import Input from "../common-components/Input";
import { SignUpRequest } from "../API/SignUpApi";
import { Form, FormLabel } from "../common-components/Form/index";
import ComponentsContainer from "../common-components/Container";
import { IDataSignUP } from "../Types/DataType";

const prevUserData: IDataSignUP = {
	name: "",
	email: "",
	confirmpassword: "",
	password: "",
};

const SignUp = () => {
	const [userData, setUserData] = useState(prevUserData);
	const onUserDataChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUserData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
		},
		[],
	);

	const onFormSubmit = useCallback(async () => {
		try {
			const response = await SignUpRequest(userData);
		} catch (e) {
			console.error(e);
		} finally {
			setUserData(prevUserData);
		}
	}, [userData]);

	return (
		<Form maxwidth="624" maxheigth="550" margin="auto" padding="40">
			<ComponentsContainer margin="0 0 10px">
				<FormLabel htmlFor="name">
					Name
					<Input
						name="name"
						height="56px"
						border="1px solid rgba(49, 48, 55, 0.1) "
						placeholder="Your name"
						value={userData.name}
						fieldName="name"
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
				<FormLabel htmlFor="confirmpassword">
					Confirm Password
					<Input
						height="56px"
						border="1px solid rgba(49, 48, 55, 0.1) "
						name="confirmpassword"
						placeholder="Confirm Your password"
						value={userData.confirmpassword}
						fieldName="confirmpassword"
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
				type="submit"
				onClick={onFormSubmit}
			>
				Sign Up
			</Button>
		</Form>
	);
};

export default SignUp;
