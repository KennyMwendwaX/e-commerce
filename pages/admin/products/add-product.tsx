import SideLayout from "@/components/SideLayout";
import axios from "axios";
import { useState } from "react";

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
          <form onSubmit={handleProductUpload}>
            <label
              htmlFor="file"
              className="mb-2 block text-sm font-medium text-gray-900">
              Product image
            </label>
            <input
              type="file"
              id="file"
              className="text-grey-500 w-full cursor-pointer rounded-lg border-2 border-gray-900 bg-gray-50 pr-40 text-sm file:mr-5 file:border-0 file:bg-gray-900
             file:px-6 file:py-2 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer"
              onChange={handleFileChange}
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              IMG, PNG, JPG, JPEG, WEBP.
            </p>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Name
              </label>
              <input
                type="name"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="brand"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Brand
              </label>
              <input
                type="brand"
                id="brand"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="brand"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Category
              </label>
              <input
                type="category"
                id="category"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="category"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Description
              </label>
              <input
                type="description"
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="description"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Price
              </label>
              <input
                type="price"
                id="price"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="price"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Quantity"
                className="mb-2 block text-sm font-medium text-gray-900">
                Product Quantity
              </label>
              <input
                type="Quantity"
                id="Quantity"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="Quantity"
                required
              />
            </div>
            <button
              type="submit"
              disabled={uploading}
              style={{ opacity: uploading ? ".5" : "1" }}
              className="mt-4 w-32 rounded bg-red-600 py-2 text-center text-white">
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
      </main>
    </SideLayout>
  );
}
