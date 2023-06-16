import { NextApiRequest, NextApiResponse } from "next";
import items from "@/asset/items.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });
  res.status(200).json(items);
}
