import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import { ItemTypes } from "../types/StoreTypes";
import { useSearchContext } from "../context/SearchContext";
import useColorMode from "../hooks/useColorMode";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Navbar() {
  const { cartQuantity } = useCart();
  const { filteredItems, setFilteredItems } = useSearchContext();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const fetchItems = useCallback(() => {
    fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data
          .filter((item: ItemTypes) => {
            return (
              searchValue && // prevent rendering when there is no input
              item &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
          })
          .sort((a: ItemTypes, b: ItemTypes) => {
            if (
              searchValue && // check that the value is not null
              a.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return -1; // a comes first if it starts with the search value
            } else if (
              searchValue && // check that the value is not null
              b.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return 1; // b comes first if it starts with the search value
            } else {
              return 0; // keep the original order
            }
          });

        setFilteredItems(searchResults);
      });
  }, [searchValue, setFilteredItems]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems, searchValue]);

  useEffect(() => {
    if (filteredItems != null && filteredItems.length > 0) {
      router.push("/products");
    }
  }, [filteredItems]);

  const [theme, setTheme] = useColorMode();

  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full bg-gray-200 px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={Logo} className="mr-3 h-6 sm:h-9" alt="Iconic Logo" />
            <span className="self-center whitespace-nowrap font-mono text-xl font-semibold tracking-tight text-gray-800">
              Iconic
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mr-4 rounded-lg p-2.5 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300">
              {theme === "light" ? (
                <BsMoonStarsFill className="h-6 w-6" />
              ) : (
                <BsSunFill className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </button>
            <div className="relative hidden md:block">
              <Link
                href="/cart"
                className="cursor-point text-3xl text-gray-700">
                <HiOutlineShoppingCart />
                {cartQuantity > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {cartQuantity}
                  </span>
                )}
              </Link>
            </div>
            {/* Mobile view Icons */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="mr-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden">
              <FaSearch />
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <FaBars />
            </button>
          </div>
          {/* Search bar */}
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search">
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FaSearch />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-500 bg-gray-50 p-2 pl-10 text-sm text-gray-800 focus:border-blue-600 focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
