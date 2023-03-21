import { useEffect, useState } from "react"

type Category = {
  id: string
  name: string
  imgUrl: string
}

export default function PopularCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    function fetchCategories() {
      fetch("http://localhost:8000/popular-categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }
    fetchCategories()
  }, [])

  return (
    <>
      <div>Explore Popular Categories</div>
      <div className="grid grid-cols-6 space-x-2">
        {categories.map((category) => (
          <div className="block relative mb-5" key={category.id}>
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer mb-2"
              src={category.imgUrl}
            />
            <div className="text-center">{category.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}
