import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch, FaBars } from "react-icons/fa"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { BsToggleOn } from "react-icons/bs"
import { useCart } from "../context/CartContext"
import { ItemTypes } from "../types/StoreTypes"
import { useSearchContext } from "../context/SearchContext"

export default function Navbar() {
  const { cartQuantity } = useCart()
  const { filteredItems, setFilteredItems } = useSearchContext()
  const [searchValue, setSearchValue] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  function fetchItems() {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data
          .filter((item: ItemTypes) => {
            return (
              searchValue && // prevent rendering when there is no input
              item &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          })
          .sort((a: ItemTypes, b: ItemTypes) => {
            if (
              searchValue && // check that the value is not null
              a.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return -1 // a comes first if it starts with the search value
            } else if (
              searchValue && // check that the value is not null
              b.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return 1 // b comes first if it starts with the search value
            } else {
              return 0 // keep the original order
            }
          })

        setFilteredItems(searchResults)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [searchValue])

  useEffect(() => {
    if (filteredItems != null && filteredItems.length > 0) {
      navigate("/products")
    }
  }, [filteredItems])

  return (
    <>
      <nav className="bg-gray-200 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Iconic Logo"
            />
            <span className="self-center text-gray-800 text-xl tracking-tight font-mono font-semibold whitespace-nowrap">
              Iconic
            </span>
          </a>
          <div className="flex md:order-2">
            <button className="text-gray-700 cursor-pointer mr-8">
              <BsToggleOn className="w-12 h-8" />
            </button>
            <div className="relative hidden md:block">
              <a href="/cart" className="text-gray-700 text-3xl cursor-pointer">
                <HiOutlineShoppingCart />
                {cartQuantity > 0 && (
                  <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full -top-2 -right-2">
                    {cartQuantity}
                  </span>
                )}
              </a>
            </div>
            {/* Mobile view Icons */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
              <FaSearch />
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <FaBars />
            </button>
          </div>
          {/* Search bar */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                <FaSearch />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                onChange={handleChange}
                className="block w-full p-2 pl-10 text-sm text-gray-800 border border-gray-500 focus:outline-none focus:border-blue-600 rounded-lg bg-gray-50"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
