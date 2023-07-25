import SideLayout from "@/components/SideLayout";
import formatCurrency from "@/utils/formatCurrency";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Product } from "@/types/ProductTypes";

export default function Index() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, redirect to the signin route.
      router.replace("/signin");
    },
  });

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("/api/products/user-products");
      const data = await response.json();
      // Sort items by createdAt in descending order
      const sortedItems: Product[] = data.sort(
        (a: Product, b: Product) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setItems(sortedItems);
    }
    fetchItems();
  }, []);
  return (
    <SideLayout>
      <main className="h-auto p-4 pt-20 md:ml-64">
        <div className="text-xl">Products</div>
        <Link
          href="/admin/products/add-product"
          className="mt-5 inline-flex items-center rounded-lg border border-gray-600 bg-transparent px-10 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
          <HiPlus className="mr-1 h-5 w-5" />
          Add Product
        </Link>

        <table className="text-left text-sm text-gray-500">
          <thead className="border-b border-gray-400 text-sm text-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-400">
                <td className="w-32 p-4">
                  <Image
                    width={128}
                    height={128}
                    src={item.imgUrl}
                    alt={item.name}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-700">
                  {item.name}
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center border border-gray-500 bg-transparent font-light">
                    <span className="sr-only">Quantity button</span>

                    <button className="bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none">
                      {item.quantity}
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {formatCurrency(item.price)}
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 hover:underline">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </SideLayout>
  );
}
