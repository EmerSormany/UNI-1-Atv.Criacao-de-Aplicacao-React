import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import ProductCard from "./components/produtctCard/ProductCard";
import "./App.css";

function App() {
  const products = [
    {id: 1, name: "Notebook", price: 3500, description: "Notebook com 16gb RAM e 512GB"},
    {id: 2, name: "Smartphone", price: 2200, description: "Tela AMOLED e câmera tripla"},
    {id: 3, name: "Fone Bluetooth", price: 300, description: "Bluetooth com cancelamento"},
    {id: 4, name: "Teclado Mecânico", price: 450, description: "Teclado mecânico RGB Gamer"}
  ]

  return (
    <div className="app-container">
      <Header />
      <div>
        <Sidebar />
        <div className="content-area">
          {products.map((product) => (
            <ProductCard 
              kay={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;