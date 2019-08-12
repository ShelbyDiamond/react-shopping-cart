import React, { useState, createContext, useContext } from "react"
import { Route } from "react-router-dom"
import data from "./data"

// Components
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"
import ProductContext from "./contexts/ProductContex"

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    setCart([...cart, item])
  }

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <Navigation cart={cart} />
        {/* Routes */}
        <Route exact path="/" component={products} /> />
        <Route path="/cart" component={cart} />
      </div>
    </ProductContext.Provider>
  )
}

export default App
