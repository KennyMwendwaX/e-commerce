import {
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full container">
          <div className="flex flex-wrap px-6 py-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download Our Site
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <FaApple className="w-7 h-7" />
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        Download on the
                      </span>
                      <span className="title-font font-medium">App Store</span>
                    </span>
                  </button>
                </li>
                <li className="mb-4">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <FaGooglePlay className="w-6 h-6" />
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">
                        GET IT ON
                      </span>
                      <span className="title-font font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="ml-20">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SUBSCRIBE TO OUR MAILING LIST
              </h2>

              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center md:justify-start">
                <div className="relative block w-full mr-3">
                  <label
                    htmlFor="member_email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="inline-flex items-center">
                    <div className="absolute top-10 left-0 flex items-center pl-3 pointer-events-none">
                      <HiOutlineMail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      id="member_email"
                      className="bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Your email address..."
                      required
                      type="email"
                    />
                    <button className="text-white bg-blue-800 border-0 py-2 px-6 ml-4 focus:outline-none hover:bg-blue-600 rounded">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="/">Iconic™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 text-lg sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-white">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-white">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-white">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
