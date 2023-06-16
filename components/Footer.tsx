import Link from "next/link";
import {
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <footer className="rounded-lg bg-gray-50">
        <div className="container mx-auto w-full">
          <div className="flex flex-wrap px-6 py-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Company
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-20">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Returns and Refunds Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-20">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Download Our Site
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <button className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-gray-200 focus:outline-none">
                    <FaApple className="h-7 w-7" />
                    <span className="ml-4 flex flex-col items-start leading-none">
                      <span className="mb-1 text-xs">Download on the</span>
                      <span className="title-font font-medium">App Store</span>
                    </span>
                  </button>
                </li>
                <li className="mb-4">
                  <button className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-gray-200 focus:outline-none">
                    <FaGooglePlay className="h-6 w-6" />
                    <span className="ml-4 flex flex-col items-start leading-none">
                      <span className="mb-1 text-xs">GET IT ON</span>
                      <span className="title-font font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="ml-20">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                SUBSCRIBE TO OUR MAILING LIST
              </h2>

              <div className="flex flex-wrap items-center justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
                <div className="relative mr-3 block w-full">
                  <label
                    htmlFor="member_email"
                    className="mb-2 block text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="inline-flex items-center">
                    <div className="pointer-events-none absolute left-0 top-10 flex items-center pl-3">
                      <HiOutlineMail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="member_email"
                      className="block w-full rounded-md border-2 border-gray-400 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Your email address..."
                      type="email"
                      required
                    />
                    <button className="ml-4 rounded-lg border-0 bg-blue-800 px-6 py-2.5 text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-gray-200 px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <Link href="/">Iconic™</Link>. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 text-lg sm:justify-center md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
