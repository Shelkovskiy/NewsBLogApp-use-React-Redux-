import { URL_POSTS } from "../../constants/URLS";
import { IDataSignIn } from "../../Types/DataType";

export const SignInRequest = async ({ login, password }: IDataSignIn) => {
	const resRequest = await fetch(URL_POSTS, {
		method: "POST",
		body: JSON.stringify({ login, password }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const response = await resRequest.json();
	return response;
};
