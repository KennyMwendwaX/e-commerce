import Link from "next/link";
import { AiFillTag } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar  */}
      <aside
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-500 bg-gray-100 pt-14 transition-transform md:translate-x-0"
        aria-label="Sidebar"
        id="drawer-navigation">
        <div className="h-full overflow-y-auto bg-gray-100 px-3 py-5">
          <ul className="space-y-4">
            <li>
              <Link
                href="/admin"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <FaUser className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/overview"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <MdSpaceDashboard className="h-6 w-6 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/products"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <AiFillTag className="h-6 w-6 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <FaClipboardList className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">Orders</span>
              </Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-400 pt-5">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <FcAbout className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">Help Centre</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                <BiHelpCircle className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                <span className="ml-3">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-gray-100 p-4 lg:flex">
          <button
            type="button"
            className="mb-2 mr-2 flex w-full items-center justify-center space-x-2 rounded-lg bg-slate-900 px-5 py-2.5 text-base font-medium text-white  focus:outline-none focus:ring-4 focus:ring-gray-200">
            <HiOutlineLogout className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
