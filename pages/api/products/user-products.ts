import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method Not Allowed" });

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string,
    },
  });

  if (!user) return res.status(404).json({ message: "User not found" });

  const products = await prisma.product.findMany({
    where: {
      userId: user.id,
    },
  });

  if (!products) return res.status(404).json({ message: "Products not found" });

  return res.status(200).json(products);
}
