import { useState, useEffect } from "react";
import StoreItem from "@/components/StoreItem";
import { useSearchContext } from "@/context/SearchContext";
import { Product } from "@/types/ProductTypes";
import Head from "next/head";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("/api/products");
      const data = await response.json();
      // Sort products by createdAt in descending order
      const sortedItems: Product[] = data.sort(
        (a: Product, b: Product) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setProducts(sortedItems);
    }
    fetchItems();
  }, []);

  const [searchResults, setSearchResults] = useState<Product[] | null>(null);
  const { filteredItems } = useSearchContext();

  useEffect(() => {
    if (filteredItems != null && filteredItems.length > 0) {
      setSearchResults(filteredItems);
    } else {
      setSearchResults(null);
    }
  }, [filteredItems]);

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="body-font text-gray-600">
        <div className="container mx-auto mt-4 px-5 pb-5 pt-20">
          <div className="-m-4 flex flex-wrap">
            {searchResults ? (
              <>
                {searchResults.map((item) => (
                  <div className="w-full p-4 md:w-1/2 lg:w-1/4" key={item.id}>
                    <StoreItem {...item} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {products.map((item) => (
                  <div className="w-full p-4 md:w-1/2 lg:w-1/4" key={item.id}>
                    <StoreItem {...item} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
