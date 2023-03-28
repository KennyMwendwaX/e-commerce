import TopDeals from "../components/TopDeals"
import PopularCategories from "../components/PopularCategories"
import PopularBrands from "../components/PopularBrands"
import Footer from "../components/Footer"
import { useSearchContext } from "../context/SearchContext"
import StoreItem from "../components/StoreItem"
import { useState, useEffect } from "react"
import { ItemTypes } from "../types/StoreTypes"

export default function Home() {
  const { searchQuery } = useSearchContext()
  const [searchResults, setSearchResults] = useState<ItemTypes[]>([])

  useEffect(() => {
    if (searchQuery != null) {
      fetch("http://localhost:8000/items")
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
    }
  }, [searchQuery])

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
  )
}
