import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const router = useRouter();
  const excludePaths = ["/signup", "/signin"];

  if (excludePaths.includes(router.pathname)) {
    return (
      <>
        <main className={roboto.className}>
          <div className="min-h-screen bg-gray-100">
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className={roboto.className}>
        <div className="min-h-screen bg-gray-100">
          <SessionProvider session={session}>
            <SearchProvider>
              <CartProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CartProvider>
            </SearchProvider>
          </SessionProvider>
        </div>
      </main>
    </>
  );
}
