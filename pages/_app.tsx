import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={roboto.className}>
        <div className="min-h-screen bg-gray-100">
          <SearchProvider>
            <CartProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CartProvider>
          </SearchProvider>
        </div>
      </main>
    </>
  );
}
