import React, { useContext } from "react";
import "./Header.css";
import { global } from "../../App";

function Header(){
    const {cart} = useContext(global)
    return (
        <header className="header">
            <div className="header-title">
            <h1>Minha loja</h1>
            </div>
            <div>
                { cart.length > 0 &&(
                <button className="cart-button">
                    Carrinho ({cart.length})
                </button>
                )}
            </div>
        </header>
    )
}

export default Header;