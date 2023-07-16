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
            <div className="mb-2 text-sm font-medium">Add Product image</div>
            <input
              type="file"
              className="text-grey-500 cursor-pointer rounded-lg border-2 border-gray-900 bg-gray-50 pr-40 text-sm file:mr-5 file:border-0 file:bg-gray-900
             file:px-6 file:py-2 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer"
              onChange={handleFileChange}
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              IMG, PNG, JPG, JPEG, WEBP.
            </p>
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
