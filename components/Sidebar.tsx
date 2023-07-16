import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillTag, AiOutlinePlus } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();

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
              <button
                type="button"
                className="mb-2 mr-2 flex w-full items-center justify-center space-x-2 rounded-lg bg-slate-900 px-5 py-2.5 text-base font-medium text-white  focus:outline-none focus:ring-4 focus:ring-gray-200">
                <AiOutlinePlus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </li>
            <li>
              <Link
                href="/admin"
                className={`${
                  router.pathname === "/admin" && "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <FaUser
                  className={`${
                    router.pathname === "/admin"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-5 w-5 group-hover:text-gray-100`}
                />
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/overview"
                className={`${
                  router.pathname === "/admin/overview" &&
                  "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <MdSpaceDashboard
                  className={`${
                    router.pathname === "/admin/overview"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-5 w-5 text-xl group-hover:text-gray-100`}
                />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/products"
                className={`${
                  router.pathname === "/admin/products" &&
                  "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <AiFillTag
                  className={`${
                    router.pathname === "/admin/products"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-6 w-6 text-xl group-hover:text-gray-100`}
                />
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className={`${
                  router.pathname === "/admin/orders" &&
                  "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <FaClipboardList
                  className={`${
                    router.pathname === "/admin/orders"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-5 w-5 text-xl group-hover:text-gray-100`}
                />
                <span className="ml-3">Orders</span>
              </Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-400 pt-5">
            <li>
              <Link
                href="/admin/help"
                className={`${
                  router.pathname === "/admin/help" && "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <IoMdHelpBuoy
                  className={`${
                    router.pathname === "/admin/help"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-6 w-6 text-xl group-hover:text-gray-100`}
                />
                <span className="ml-3">Help Centre</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/about"
                className={`${
                  router.pathname === "/admin/about" && "bg-gray-700 text-white"
                } group flex cursor-pointer items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white`}>
                <BiHelpCircle
                  className={`${
                    router.pathname === "/admin/about"
                      ? "text-gray-100"
                      : "text-gray-700"
                  }h-6 w-6 text-xl group-hover:text-gray-100`}
                />
                <span className="ml-3">About</span>
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
