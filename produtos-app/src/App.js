import React, {useState, createContext} from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import ProductCard from "./components/produtctCard/ProductCard";
import "./App.css";

export const global = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, addToCart] = useState([]);

  const addNewProduct = (product) => {
    // a função que altera o estado é uma função assíncrona e agenda uma nova renderização do componente
    addToCart(currentCart => [...currentCart, product]);
  }

  const removeProduct = (productId) => {
    addToCart(currentCart => {
      const index = currentCart.findIndex(item => item.id === productId);
      if (index === -1) return currentCart;
      const newCart = [...currentCart];
      newCart.splice(index, 1);
      return newCart;
    });
  }

  return (
    <global.Provider value={{cart, addNewProduct, removeProduct}}>
      {children}
    </global.Provider>
  )
}

function App() {
  const products = [
    {id: 1, name: "Notebook", price: 3500, description: "Notebook com 16gb RAM e 512GB"},
    {id: 2, name: "Smartphone", price: 2200, description: "Tela AMOLED e câmera tripla"},
    {id: 3, name: "Fone Bluetooth", price: 300, description: "Bluetooth com cancelamento"},
    {id: 4, name: "Teclado Mecânico", price: 450, description: "Teclado mecânico RGB Gamer"}
  ]


  return (
    <GlobalProvider>
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {products.map((product) => (
            <ProductCard 
            key={product.id}
              product={product}
              />
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </GlobalProvider>
  )
}

export default App;