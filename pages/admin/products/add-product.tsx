import SideLayout from "@/components/SideLayout";
import axios from "axios";
import { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";

export default function AddProduct() {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // Guard clause
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleProductUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("uploadedFile", selectedFile);

      const res = await axios.post("/api/upload", formData);
      if (res.status === 201) {
        // change route to products
      }
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
  return (
    <SideLayout>
      <main className="h-auto p-4 pt-20 md:ml-64">
        <div className="text-xl">Add Product</div>
        <div className="mt-5">
          <form
            className="mx-auto w-2/3 space-y-6"
            onSubmit={handleProductUpload}>
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex h-72 w-1/2 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <BiCloudUpload className="mb-4 h-12 w-12 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">
                      Click to upload product image
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    IMG, PNG, JPG, JPEG or WEBP (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="name"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Product Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                  placeholder="brand"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Product Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                  placeholder="category"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Product Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                  placeholder="price"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-medium text-gray-900">
                  Product Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                  placeholder="quantity"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Description
              </label>
              <textarea
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="description"
                required></textarea>
            </div>

            <button
              type="submit"
              disabled={uploading}
              style={{ opacity: uploading ? ".5" : "1" }}
              className="mt-5 inline-flex items-center rounded-lg border bg-gray-800 px-10 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
      </main>
    </SideLayout>
  );
}
