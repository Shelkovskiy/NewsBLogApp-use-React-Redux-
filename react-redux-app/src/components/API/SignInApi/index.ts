export interface IData {
	login?: string;
	password?: string;
	
}

export const SignInRequest = async ({ login, password }: IData) => {
   const resRequest = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
         method: "POST",
         body: JSON.stringify({ login, password }),
         headers: {
            "Content-type": "application/json; charset=UTF-8",
         },
      },
   );
   const response = await resRequest.json();
   return response;
};