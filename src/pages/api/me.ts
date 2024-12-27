import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const getUser = async (requestData: { token: string }) =>
  fetch("https://sportujspolu-api.onrender.com/api/v1/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${requestData.token}`,
    },
  });

export default async function handler(
  { body: { token } }: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const getUserResponse = await getUser({ token });
  const user = await getUserResponse.json();

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(400).json({ message: "No user for you" });
}
