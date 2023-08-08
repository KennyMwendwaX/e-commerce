import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SideLayout from "@/components/SideLayout";
import Head from "next/head";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, redirect to the signin route.
      router.replace("/signin");
    },
  });

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Admin page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideLayout>
        <main className="h-auto p-4 pt-20 md:ml-64">
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
          </div>
          <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          </div>
          <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          </div>
        </main>
      </SideLayout>
    </>
  );
}
