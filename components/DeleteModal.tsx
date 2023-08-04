import { Product } from "@/types/ProductTypes";
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { TiWarning } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";

interface DeleteModalProps {
  product: Product;
  fetchProducts: () => void;
  handleDeleteModalToggle: (product: Product) => void;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteModal({
  product,
  fetchProducts,
  handleDeleteModalToggle,
  setShowModal,
}: DeleteModalProps) {
  const handleDeleteProduct = async (productId: string) => {
    try {
      await fetch(`/api/products/delete/${productId}`, {
        method: "DELETE",
      });
      fetchProducts(); // Fetch the updated list of products after deletion
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        id="deleteModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
        {/* Modal content */}
        <div className="relative h-full w-full max-w-md rounded-lg bg-white p-4 md:h-auto">
          {/* Modal header */}
          <div className="mb-4 flex items-start rounded-t pb-2 sm:mb-5">
            <div className="ml-auto rounded-lg bg-red-200 p-3">
              <TiWarning className="h-9 w-9 text-red-600" />
            </div>
            <button
              type="button"
              onClick={() => handleDeleteModalToggle(product)}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-toggle="deleteModal">
              <MdClose className="h-6 w-6" />
              <span className="sr-only">Close note</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="mb-3 text-xl font-bold text-gray-900">
            {/* title */}
            You are about to delete the following product:
          </div>
          <div>
            <div className="flex items-center text-gray-600">
              <BsFillExclamationCircleFill className="mr-2 text-gray-400" />
              {product.name}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={() => handleDeleteModalToggle(product)}
              className="focus:ring-primary-300 inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4">
              <FaTimes className="-ml-1 mr-1 h-4 w-4" />
              No, Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDeleteProduct(product.id)}
              className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300">
              <FaRegTrashAlt className="-ml-1 mr-1.5 h-4 w-4" />
              Yes, I&apos;m sure
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
