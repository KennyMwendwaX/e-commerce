import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { HiOutlineUser, HiFingerPrint, HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { FaClipboardList, FaUser } from "react-icons/fa";

export default function Profile() {
  // const router = useRouter();
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, redirect to the signin route.
  //     router.replace("/signin");
  //   },
  // });

  return (
    <>
      <div>
        {/* Sidebar  */}

        <aside
          className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-gray-100 pt-14 transition-transform md:translate-x-0"
          aria-label="Sidenav"
          id="drawer-navigation">
          <div className="h-full overflow-y-auto bg-gray-100 px-3 py-5">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                  <FaUser className="h-6 w-6 text-gray-500" />
                  <span className="ml-3 text-gray-950">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                  <MdSpaceDashboard className="h-6 w-6 text-gray-500" />
                  <span className="ml-3 text-gray-950">Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                  <AiFillTag className="h-6 w-6 text-gray-500" />
                  <span className="ml-3 text-gray-950">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                  <FaClipboardList className="h-6 w-6 text-gray-500" />
                  <span className="ml-3 text-gray-950">Orders</span>
                </a>
              </li>
            </ul>
            <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span className="ml-3">Components</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span className="ml-3">Help</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-gray-100 p-4 lg:flex">
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg border border-gray-200 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
              <HiOutlineLogout />
              Logout
            </button>
          </div>
        </aside>
        <main className="h-auto p-4 pt-20 md:ml-64">
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
            <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
          </div>
          <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          </div>
          <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
            <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          </div>
        </main>
      </div>
    </>
  );
}
