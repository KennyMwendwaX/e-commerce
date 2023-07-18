import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = async (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/pictures");
    options.keepExtensions = true;
    options.filename = (name, ext, path, form) => {
      return path.originalFilename as string;
    };
  }
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
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    try {
      await fs.readdir(path.join(process.cwd() + "/public", "/pictures"));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd() + "/public", "/pictures"));
    }

    const { fields, files } = await readFile(req, true);

    const myFiles = files.picture as formidable.File[];
    const file = myFiles[0];

    const { name, brand, category, price, quantity, description } = fields;
    console.log(fields);

    if (!name || !brand || !category || !price || !quantity || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const createdProduct = await prisma.products.create({
      data: {
        name: name as string,
        brand: brand as string,
        category: category as string,
        price: parseInt(price as string),
        quantity: parseInt(quantity as string),
        description: description as string,
        imgUrl: file.filepath,
      },
    });

    if (createdProduct)
      return res.status(201).json({
        message: "Product created successfully",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
