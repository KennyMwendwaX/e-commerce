import { NextApiRequest, NextApiResponse } from "next";
import categories from "@/asset/popular-categories.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(categories);
}
