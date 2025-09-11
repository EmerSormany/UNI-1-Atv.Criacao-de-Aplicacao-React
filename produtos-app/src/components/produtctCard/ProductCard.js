import React from "react";
import "./ProductCard.css";

function ProductCard({name, price, description}) {
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Preço: R${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard;