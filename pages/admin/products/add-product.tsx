import SideLayout from "@/components/SideLayout";
import { addProductFormSchema } from "@/utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiCloudUpload } from "react-icons/bi";

type FormValues = {
  name: string;
  brand: string;
  category: string;
  price: string;
  quantity: string;
  description: string;
};

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(addProductFormSchema),
  });
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [serverErrors, setServerErrors] = useState("");

  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return; // Guard clause
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleProductUpload = async (data: FormValues) => {
    setIsUploading(true);
    const { name, brand, category, price, quantity, description } = data;
    const product = {
      name,
      brand,
      category,
      price: parseInt(price),
      quantity: parseInt(quantity),
      description,
    };

    const formData = new FormData();
    formData.append("product", JSON.stringify(product));
    if (selectedFile) formData.append("picture", selectedFile);

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch("/api/products/register", options);
      if (response.ok) {
        // Handle successful upload
        router.push("/admin/products");
      } else {
        // Handle upload error
        setServerErrors("Upload Failed, Please try again later");
      }
    } catch (error) {
      // Handle fetch error
      setServerErrors("An unexpected error occurred, Please try again later");
    }
    setIsUploading(false);
  };

  return (
    <SideLayout>
      <main className="h-auto p-4 pt-20 md:ml-64">
        <div className="text-xl">Add Product</div>
        <div className="mt-5">
          <form
            className="mx-auto w-2/3 space-y-6"
            onSubmit={handleSubmit(handleProductUpload)}>
            {serverErrors && (
              <div
                className="mb-4 rounded-lg border border-red-600 bg-red-50 p-4 text-sm text-red-800"
                role="alert">
                {serverErrors}
              </div>
            )}
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex h-72 w-1/2 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                {selectedImage ? (
                  <Image
                    width={280}
                    height={280}
                    src={selectedImage}
                    alt="Selected"
                    className="text-gray-500"
                  />
                ) : (
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
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  required
                />
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
                {...register("name")}
              />
              {errors.name?.message && (
                <span className="text-xs text-red-600">
                  {errors.name?.message}
                </span>
              )}
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
                  {...register("brand")}
                />
                {errors.brand?.message && (
                  <span className="text-xs text-red-600">
                    {errors.brand?.message}
                  </span>
                )}
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
                  {...register("category")}
                />
                {errors.category?.message && (
                  <span className="text-xs text-red-600">
                    {errors.category?.message}
                  </span>
                )}
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
                  required
                  {...register("price")}
                />
                {errors.price?.message && (
                  <span className="text-xs text-red-600">
                    {errors.price?.message}
                  </span>
                )}
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
                  {...register("quantity")}
                />
                {errors.quantity?.message && (
                  <span className="text-xs text-red-600">
                    {errors.quantity?.message}
                  </span>
                )}
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
                required
                {...register("description")}></textarea>
              {errors.description?.message && (
                <span className="text-xs text-red-600">
                  {errors.description?.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`${
                isUploading ? `bg-gray-600` : `bg-gray-800`
              } mt-5 inline-flex items-center rounded-lg border px-10 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200`}
              disabled={isUploading}>
              {isUploading ? (
                <>
                  Uploading
                  <AiOutlineLoading3Quarters className="ml-2 animate-spin" />
                </>
              ) : (
                <>Upload</>
              )}
            </button>
          </form>
        </div>
      </main>
    </SideLayout>
  );
}
