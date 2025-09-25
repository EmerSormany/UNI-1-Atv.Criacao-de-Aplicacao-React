import React, { useState, useContext } from "react";
import "./ProductCard.css";
import { global } from "../../App";

function ProductCard({product, onAddToCart, onRemoveToCart}) {
    const {name, price, description} = product;
    const { addNewProduct, removeProduct } = useContext(global)

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddComment = () => {
        if (comment.trim() !== "") {
            if (editIndex !== null) {
                // edita comentário
                const updatedComments = [...comments];
                updatedComments[editIndex] = comment;
                setComments(updatedComments);
                setEditIndex(null);
            } else {
                // adiciona novo comentário
                setComments([...comments, comment]);
            }
                setComment("");
        }
    };

    const handleEditComment = (idx) => {
        setComment(comments[idx]);
        setEditIndex(idx);
    };

    const handleDeleteComment = (idx) => {
        setComments(comments.filter((_, i) => i !== idx));
        // Se estiver editando o comentário que foi deletado, limpa o input
        if (editIndex === idx) {
            setComment("");
            setEditIndex(null);
        }
    };

    // const [cart, addToCart] = useState([]);
    
    // const handleProductSelect = (product) => {
    //     newValue()
    //     // addToCart(cart.push(product)
    //     //     (currentCart) => {
    //     //     console.log('valor do carrinho atual: ',currentCart );
    //     //     console.log('valor do produto a ser adicionado: ',product);
    //     //     const x = [...currentCart, product]
    //     //     console.log('valor após adicionar o produtos: ',x);
    //     //     return x
    //     // }
    // // )
    //     g = [...cart]
    //     console.log('valor do carrinho: ',cart);
    // }
    
    // const handleRemoveFromCart = (productId) => {
    //     addToCart(currentCart => {
    //     const index = currentCart.findIndex(item => item.id === productId);
    //     if (index === -1) return currentCart;
    //     const newCart = [...currentCart];
    //     newCart.splice(index, 1);
    //     return newCart;  
    //     });
    // }
    
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Preço: R${price}</p>
            <p>{description}</p>

            <button className="button-add-to-cart" onClick={()=>addNewProduct(product)}>
                Adicionar ao Carrinho
            </button>
            <button className="button-remove-to-cart" onClick={()=> removeProduct(product.id)}>
                Remover do Carrinho
            </button>

            <div className="comments-section">
                <h3>Comentários</h3>
                <input
                    type="text"
                    value={comment}

                    onChange={e => {
                        console.log(comment);
                        setComment(e.target.value)
                    }}

                    placeholder="Escreva um comentário..."
                />
                <button className="comment-button" onClick={handleAddComment}>
                    {editIndex !== null ? "Salvar" : "Adicionar Comentário"}
                </button>
                
                {comments.length > 0 && (
                    <ul className="comments-list">
                        {comments.map((c, idx) => (
                            <li key={idx}>
                                <>
                                {c}
                                </>
                                <div className="comment-actions">
                                <button 
                                    className="edit-button"
                                    onClick={() => handleEditComment(idx)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="delete-button"
                                    onClick={() => handleDeleteComment(idx)}
                                >
                                    Deletar
                                </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ProductCard;