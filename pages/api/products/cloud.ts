import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

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

const uploadFile = async (
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
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  try {
    const { fields, files } = await uploadFile(req);

    const myFiles = files.picture as formidable.File[];
    const file = myFiles[0];

    const uploadedImage = await cloudinary.uploader.upload(file.filepath, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    console.log(uploadedImage.secure_url);

    res.status(200).json({ fileUrl: uploadedImage.secure_url });

    const { name, brand, category, price, quantity, description } = fields;
    console.log(fields);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
