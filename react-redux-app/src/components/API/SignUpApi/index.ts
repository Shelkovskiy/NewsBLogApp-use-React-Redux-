export interface IData {
	password: string;
	name: string;
	email: string;
	confirmpassword: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

export const SignUpRequest = async ({
	name,
	email,
	password,
	confirmpassword,
}: IData) => {
	const resRequest = await fetch(URL, {
		method: "POST",
		body: JSON.stringify({ password, email, name, confirmpassword }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const response = await resRequest.json();
	return response;
};
