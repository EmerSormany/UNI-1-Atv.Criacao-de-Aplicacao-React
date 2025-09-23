import React from "react";
import "./ProductCard.css";

function ProductCard({product, onAddToCart, onRemoveToCart}) {
    
    const {name, price, description} = product

    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Preço: R${price}</p>
            <p>{description}</p>
            <button className="button-add-to-cart" onClick={()=> onAddToCart(product)}>
                Adicionar ao Carrinho
            </button>
            <button className="button-remove-to-cart" onClick={()=> onRemoveToCart(product.id)}>
                Remover do Carrinho
            </button>
        </div>
    )
}

export default ProductCard;