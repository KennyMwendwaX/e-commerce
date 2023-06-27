import { useEffect, useState } from "react";
import Image from "next/image";

type Brand = {
  id: string;
  name: string;
  imgUrl: string;
};

export default function PopularBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    function fetchBrands() {
      fetch("/api/popular-brands")
        .then((res) => res.json())
        .then((data) => setBrands(data));
    }

    fetchBrands();
  }, []);
  return (
    <>
      <div className="mb-2 mt-8 text-xl font-light">Explore Popular Brands</div>
      <div className="grid grid-cols-6 space-x-2">
        {brands.map((brand) => (
          <div className="relative mb-5 block" key={brand.id}>
            <Image
              alt={brand.name}
              width={192}
              height={192}
              className="mb-2 h-48 w-48 cursor-pointer overflow-hidden rounded-full"
              src={brand.imgUrl}
            />
            <div className="text-center font-mono">{brand.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
