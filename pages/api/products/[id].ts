import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { id } = req.query;
  const product = await prisma.products.findUnique({
    where: {
      id: id as string,
    },
  });

  if (!product) return res.status(404).json({ message: "Item not found" });

  return res.status(200).json(product);
}
