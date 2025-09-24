import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({product, onAddToCart, onRemoveToCart}) {
    const {name, price, description} = product;

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