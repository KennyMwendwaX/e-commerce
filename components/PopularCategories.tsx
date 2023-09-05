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
      fetch("/api/popular-categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    fetchCategories();
  }, []);

  return (
    <>
      <div className="mb-2 mt-8 text-xl font-light">
        Explore Popular Categories
      </div>
      <div className="grid grid-cols-6 space-x-2">
        {categories.map((category) => (
          <div className="relative mb-5 block" key={category.id}>
            <Image
              alt={category.name}
              width={192}
              height={192}
              className="mb-2 h-48 w-48 cursor-pointer overflow-hidden rounded-full"
              src={category.imgUrl}
            />
            <div className="text-center font-mono">{category.name}</div>
          </div>
        ))}
        <Link href="/products" className="relative mb-5 block">
          <FaArrowCircleRight className="h-48 w-48" />
          <div className="text-center font-mono">See All Products</div>
        </Link>
      </div>
    </>
  );
}
