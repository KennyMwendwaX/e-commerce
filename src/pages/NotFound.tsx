import { FaArrowLeft } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="container px-5 py-20 mx-auto">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-blue-700">404</div>
        <div className="font-medium">Page Not Found!</div>
        <div className="flex space-x-4 items-center justify-start">
          <a href="/">
            <div className="bg-blue-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
              <FaArrowLeft />
            </div>
          </a>
          <div className="text-sm font-medium">Back to Home Page</div>
        </div>
      </div>
    </div>
  )
}
