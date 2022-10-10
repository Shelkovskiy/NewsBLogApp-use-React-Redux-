import { URL_POSTS } from "../../constants/URLS";
import { IDataSignUP } from "../../Types/DataType";

export const SignUpRequest = async ({
	name,
	email,
	password,
	confirmpassword,
}: IDataSignUP) => {
	const resRequest = await fetch(URL_POSTS, {
		method: "POST",
		body: JSON.stringify({ password, email, name, confirmpassword }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const response = await resRequest.json();
	return response;
};
