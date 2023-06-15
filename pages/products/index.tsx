import { useState, useEffect } from "react";
import StoreItem from "@/components/StoreItem";
import { ItemTypes } from "@/types/StoreTypes";
import { useSearchContext } from "@/context/SearchContext";

export default function Products() {
  const [items, setItems] = useState<ItemTypes[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch("http://localhost:8000/items");
      const data = await res.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  const [searchResults, setSearchResults] = useState<ItemTypes[] | null>(null);
  const { filteredItems } = useSearchContext();

  useEffect(() => {
    if (filteredItems != null && filteredItems.length > 0) {
      setSearchResults(filteredItems);
    } else {
      setSearchResults(null);
    }
  }, [filteredItems]);

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 pt-20 pb-5 mt-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {searchResults ? (
            <>
              {searchResults.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                  <StoreItem {...item} />
                </div>
              ))}
            </>
          ) : (
            <>
              {items.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                  <StoreItem {...item} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
