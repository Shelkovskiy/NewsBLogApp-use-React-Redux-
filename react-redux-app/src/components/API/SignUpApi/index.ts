export interface IData {
	password?: string;
	name?:string;
	email?: string;
	confirmpassword?:string;
}

export const SignUpRequest = async ({ name,email, password,confirmpassword }: IData) => {
	const resRequest = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({ password,email,name,confirmpassword }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const response = await resRequest.json();
	return response;
};
