import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/utils/db";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

interface Data {
  message: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const getFormData = async (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);

  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          // Access the fields under the "product" key
          const productFields = JSON.parse(fields.product[0]);
          resolve({ fields: productFields, files });
        }
      });
    }
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
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

  try {
    const { fields, files } = await getFormData(req);

    const myFiles = files.picture as formidable.File[];
    const file = myFiles[0];

    const uploadedImage = await cloudinary.uploader.upload(file.filepath, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    if (!uploadedImage)
      return res.status(500).json({ message: "Image upload failed" });

    const { name, brand, category, price, quantity, description } = fields;

    if (!name || !brand || !category || !price || !quantity || !description)
      return res.status(400).json({ message: "Missing required fields" });

    const newProduct = await prisma.product.create({
      data: {
        name: name as string,
        brand: brand as string,
        category: category as string,
        price: parseInt(price as string),
        quantity: parseInt(quantity as string),
        description: description as string,
        imgUrl: uploadedImage.secure_url,
        userId: user.id,
      },
    });

    if (!newProduct) {
      return res.status(500).json({ message: "Product upload failed" });
    } else {
      return res.status(201).json({ message: "Product created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
