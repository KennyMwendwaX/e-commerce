import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaSearch, FaUserCog } from "react-icons/fa";
import { HiOutlineLogout, HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";
import { useSearchContext } from "../context/SearchContext";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Products } from "@/types/ProductTypes";

type NavbarProps = {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
};

export default function Navbar({ session, status }: NavbarProps) {
  const { cartQuantity } = useCart();
  const { filteredItems, setFilteredItems } = useSearchContext();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const fetchItems = useCallback(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data
          .filter((item: Products) => {
            return (
              searchValue && // prevent rendering when there is no input
              item &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
          })
          .sort((a: Products, b: Products) => {
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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-gray-200 px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              height={24}
              width={45}
              className="mr-3 sm:h-9"
              alt="Iconic Logo"
            />
            <span className="self-center whitespace-nowrap font-mono text-xl font-semibold tracking-tight text-gray-800">
              Iconic
            </span>
          </Link>
          <div className="flex items-center md:order-2">
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
            {status === "authenticated" ? (
              <>
                <button
                  type="button"
                  className="ml-5 mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0"
                  id="user-menu-button"
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="rounded-full"
                    width={32}
                    height={32}
                    src="/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>
                {/* Dropdown menu */}
                <div
                  className={`z-50 ${
                    isMenuOpen ? "" : "hidden"
                  } fixed right-6 top-8 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow`}
                  id="user-dropdown"
                  ref={dropdownRef}>
                  <div className="px-4 py-3">
                    <span className="text-md block font-semibold  text-gray-900">
                      {session?.user?.name}
                    </span>
                    <span className="block truncate text-sm font-light text-gray-500">
                      {session?.user?.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        href="/admin"
                        className="inline-flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FaUserCog size={18} />
                        &nbsp; Admin
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => signOut()}
                        className="inline-flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <HiOutlineLogout size={18} />
                        &nbsp; Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                href="/signin"
                className="ml-5 mr-3 rounded-lg bg-slate-900 px-5 py-2 text-white">
                Login
              </Link>
            )}
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
