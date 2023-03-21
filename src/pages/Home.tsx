import TopDeals from "../components/TopDeals"
import PopularCategories from "../components/PopularCategories"

export default function Home() {
  return (
    <div className="container px-5 pt-20 pb-5 mx-auto">
      <TopDeals />
      <div className="mb-8">
        <PopularCategories />
      </div>
      <div>Explore Popular Categories</div>
      <div>Top Seller Books</div>
    </div>
  )
}
