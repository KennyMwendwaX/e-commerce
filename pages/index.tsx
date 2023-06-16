import TopDeals from "../components/TopDeals";
import PopularCategories from "../components/PopularCategories";
import PopularBrands from "../components/PopularBrands";
import Footer from "../components/Footer";

export default function Home() {
  return (
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
  );
}
