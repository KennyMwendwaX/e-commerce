import TopDeals from "../components/TopDeals";
import PopularCategories from "../components/PopularCategories";
import PopularBrands from "../components/PopularBrands";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-5 pb-5 pt-20">
        <TopDeals />
        <div className="mb-10">
          <PopularCategories />
        </div>
        <div className="mb-10">
          <PopularBrands />
        </div>
        <Footer />
      </div>
    </>
  );
}
