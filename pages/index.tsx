import TopDeals from "../components/TopDeals";
import PopularCategories from "../components/PopularCategories";
import PopularBrands from "../components/PopularBrands";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container px-5 pt-20 pb-5 mx-auto">
      <TopDeals />
      <div className="mb-8">
        <PopularCategories />
      </div>
      <div className="mb-8">
        <PopularBrands />
      </div>
      <Footer />
    </div>
  );
}
