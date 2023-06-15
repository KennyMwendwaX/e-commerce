import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

type Category = {
  id: string;
  name: string;
  imgUrl: string;
};

export default function PopularCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    function fetchCategories() {
      fetch("http://localhost:8000/popular-categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    fetchCategories();
  }, []);

  return (
    <>
      <div className="font-light text-xl mt-8 dark:text-gray-300 mb-2">
        Explore Popular Categories
      </div>
      <div className="grid grid-cols-6 space-x-2">
        {categories.map((category) => (
          <div className="block relative mb-5" key={category.id}>
            <Image
              alt=""
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer mb-2"
              src={category.imgUrl}
            />
            <div className="text-center font-mono dark:text-gray-300">
              {category.name}
            </div>
          </div>
        ))}
        <Link href="/products" className="block relative mb-5">
          <FaArrowCircleRight className="h-48 w-48" />
          <div className="text-center font-mono">See All</div>
        </Link>
      </div>
    </>
  );
}
