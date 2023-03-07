export default function CartSummary() {
  return (
    <>
      <div id="summary" className="w-1/3 px-8">
        <h1 className="font-semibold text-2xl border-b border-gray-400 pb-4">
          Order Summary
        </h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
            Shipping
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label
            htmlFor="promo"
            className="font-semibold inline-block mb-3 text-sm uppercase">
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="block w-full p-2 pl-10 text-sm text-gray-800 border border-gray-400 focus:outline-none focus:border-blue-600 rounded-lg bg-transparent"
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>$600</span>
          </div>
          <button className="bg-indigo-500 rounded-sm font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
