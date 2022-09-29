export interface IData {
	login: string;
	password: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

export const SignInRequest = async ({ login, password }: IData) => {
	const resRequest = await fetch(URL, {
		method: "POST",
		body: JSON.stringify({ login, password }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const response = await resRequest.json();
	return response;
};
