import { NextApiRequest, NextApiResponse } from "next";
import data from "@/asset/data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data);
}
