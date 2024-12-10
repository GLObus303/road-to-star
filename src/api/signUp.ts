export const registerUser = (requestData: {
  email: string;
  name: string;
  password: string;
}) =>
  fetch("https://sportujspolu-api.onrender.com/api/v1/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
