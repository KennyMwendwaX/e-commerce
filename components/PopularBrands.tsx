import { useEffect, useState } from "react"

type Brand = {
  id: string
  name: string
  imgUrl: string
}

export default function PopularBrands() {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    function fetchBrands() {
      fetch("http://localhost:8000/popular-brands")
        .then((res) => res.json())
        .then((data) => setBrands(data))
    }

    fetchBrands()
  }, [])
  return (
    <>
      <div className="font-light text-xl mt-8 mb-2 dark:text-gray-300">
        Explore Popular Brands
      </div>
      <div className="grid grid-cols-6 space-x-2">
        {brands.map((brand) => (
          <div className="block relative mb-5" key={brand.id}>
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer mb-2"
              src={brand.imgUrl}
            />
            <div className="text-center font-mono dark:text-gray-300">
              {brand.name}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}