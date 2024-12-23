import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const loginUser = (requestData: { email: string; password: string }) =>
  fetch("https://sportujspolu-api.onrender.com/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, password } = req.body;

  const loginResponse = await loginUser({ email, password });

  const data = await loginResponse.json();

  if (data?.token) {
    return res.status(200).json(data.token);
  }

  return res.status(400).json({ message: "No token for you" });
}
