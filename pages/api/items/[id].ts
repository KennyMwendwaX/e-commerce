import { NextApiRequest, NextApiResponse } from "next";
import items from "@/asset/items.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { id } = req.query;
  const item = items.find((item) => item.id === id);

  if (!item) return res.status(404).json({ message: "Item not found" });

  return res.status(200).json(item);
}
