import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/utils/db";

interface Data {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method !== "DELETE")
      return res.status(405).json({ message: "Method Not Allowed" });

    const session = await getServerSession(req, res, authOptions);

    if (!session)
      return res.status(401).json({ message: "User must be logged in" });

    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email as string,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const { id } = req.query;

    const product = await prisma.product.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.userId !== user.id)
      return res
        .status(403)
        .json({ message: "User is not authorized to delete this product" });

    await prisma.product.delete({
      where: {
        id: id as string,
      },
    });

    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred during product deletion" });
  }
}
