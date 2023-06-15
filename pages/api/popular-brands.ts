import { NextApiRequest, NextApiResponse } from "next";
import brands from "@/asset/popular-brands.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(brands);
}
