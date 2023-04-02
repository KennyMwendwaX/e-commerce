import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SearchProvider } from "./context/SearchContext"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Offcanvas from "./components/Offcanvas"
import Item from "./pages/Item"
import NotFound from "./pages/NotFound"

function App() {
  return (
    // <div className="bg-gray-100 dark:bg-gray-900">
    <Router>
      <SearchProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":id" element={<Item />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="canvas" element={<Offcanvas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </SearchProvider>
    </Router>
    // </div>
  )
}

export default App
