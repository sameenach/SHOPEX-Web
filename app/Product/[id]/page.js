
"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CartContext } from "../../context/CartContext";
import { getProductById } from "../../Services/ProductService";
import "./ProductDetail.css";

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProductById(id);
            setProduct(data);
        }

        fetchProduct();
    }, [id]);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="detail-container">
            <div className="detail-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="detail-info">
                <p className="detail-category">
                    {product.category}
                </p>

                <h1>{product.title}</h1>

                <h2>₹{product.price}</h2>

                <p className="detail-description">
                    {product.description}
                </p>

                <button
                    className="cart-button"
                    onClick={() => addToCart(product)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
