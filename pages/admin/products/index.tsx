import SideLayout from "@/components/SideLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiPlus } from "react-icons/hi";

export default function Index() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, redirect to the signin route.
      router.replace("/signin");
    },
  });
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
      </main>
    </SideLayout>
  );
}
