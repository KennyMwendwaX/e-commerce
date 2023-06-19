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
          className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-400 bg-gray-100 pt-14 transition-transform md:translate-x-0"
          aria-label="Sidebar"
          id="drawer-navigation">
          <div className="h-full overflow-y-auto bg-gray-100 px-3 py-5">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <FaUser className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                  <span className="ml-3">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <MdSpaceDashboard className="h-6 w-6 text-gray-700 group-hover:text-gray-100" />
                  <span className="ml-3">Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <AiFillTag className="h-6 w-6 text-gray-700 group-hover:text-gray-100" />
                  <span className="ml-3">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <FaClipboardList className="h-5 w-5 text-gray-700 group-hover:text-gray-100" />
                  <span className="ml-3">Orders</span>
                </a>
              </li>
            </ul>
            <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <span className="ml-3">Help Centre</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">
                  <span className="ml-3">About Us</span>
                </a>
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
