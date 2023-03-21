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

  return <div>PopularCategories</div>
}
