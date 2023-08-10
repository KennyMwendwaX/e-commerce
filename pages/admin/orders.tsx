import SideLayout from "@/components/SideLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Orders() {
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
        <title>Orders</title>
        <meta name="description" content="Orders page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideLayout>
        <main className="h-auto p-4 pt-20 md:ml-64">Orders</main>
      </SideLayout>
    </>
  );
}
