import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function DeleteModal() {
  return (
    <>
      {/* Modal */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
        {/* Modal content */}
        <div className="relative w-full max-w-2xl rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Note
            </h3>
            <button
              type="button"
              //   onClick={() => handleNoteModalToggle(note)}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-toggle="defaultModal">
              <MdClose className="h-6 w-6" />
              <span className="sr-only">Close note</span>
            </button>
          </div>
          {/* Modal body */}
          <h1 className="title-font mb-3 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
            {/* title */}
          </h1>
          <div className="flex items-center justify-between pb-4">
            <span className="inline-block rounded bg-indigo-100 px-2 py-1 text-sm font-medium tracking-widest text-indigo-600 dark:bg-indigo-600 dark:text-gray-100">
              {/* category */}
            </span>
            <span
              aria-label="time"
              role="contentinfo"
              className="flex items-center rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-800 dark:border-gray-200 dark:text-gray-200">
              <HiOutlineClock />
              <p className="ml-2"> {/* createdAt */}</p>
            </span>
          </div>
          <textarea
            id="content"
            rows={8}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500"
            placeholder="Write your note content here"
            readOnly
            required></textarea>
          <div className="flex items-center space-x-4 p-3">
            <button
              type="button"
              //   onClick={updateNote}
              className="inline-flex items-center rounded-lg border border-blue-700 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
              <FaEdit className="-ml-1 mr-1 h-4 w-4" />
              Edit
            </button>
            <button
              type="button"
              //   onClick={deleteNote}
              className="inline-flex items-center rounded-lg border border-red-600 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300">
              <FaRegTrashAlt className="-ml-1 mr-1.5 h-4 w-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
