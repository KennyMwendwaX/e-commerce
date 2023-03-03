import { useState, useEffect } from "react"
import StoreItem from "../components/StoreItem"
import { ItemTypes } from "../types/StoreTypes"

export default function Items() {
  const [items, setItems] = useState<ItemTypes[]>([])

  useEffect(() => {
    function fetchItems() {
      fetch("http://localhost:8000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
    }
    fetchItems()
  }, [])

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 pt-20 pb-5 mt-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
