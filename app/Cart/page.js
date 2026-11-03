
"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {

    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    return (
        <main className="cart-page">

            <div className="cart-container">
             
                <div className="cart-heading">
                    <p className="cart-subtitle">YOUR STYLE, YOUR CHOICE</p>
                    <h1>Shopping Bag</h1>
                    <p>Review your favourite items before checkout.</p>
                </div>

                {cart.length === 0 ? (

                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛍️</div>
                        <h2>Your Shopping Bag is Empty</h2>
                        <p>Looks like you haven't added anything yet.</p>
                        <Link href="/Product" className="continue-shopping">
                            EXPLORE PRODUCTS
                        </Link>
                    </div>

                ) : (

                    <div className="cart-layout">

                        <div className="cart-products">

                            <div className="cart-items-heading">
                                <h2>My Items</h2>
                                <span>{cart.length} Items</span>
                            </div>

                            {cart.map((item, index) => (

                                <div className="cart-item" key={`${item.id}-${index}`}>

                                    <div className="cart-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="cart-item-details">

                                        <p className="cart-category">
                                            {item.category}
                                        </p>

                                        <h3>{item.title}</h3>

                                        <p className="cart-price">
                                            ₹{Number(item.price).toFixed(2)}
                                        </p>

                                        <button
                                            className="remove-cart-btn"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            ✕ Remove
                                        </button>

                                    </div>

                                </div>

                            ))}

                            <Link href="/Product" className="continue-link">
                                ← Continue Shopping
                            </Link>

                        </div>

                        <div className="cart-summary">

                            <h2>Order Summary</h2>

                            <div className="summary-row">
                                <span>Total Items</span>
                                <span>{cart.length}</span>
                            </div>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>

                            <div className="summary-row">
                                <span>Delivery Charges</span>
                                <span className="free-text">FREE</span>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-total">
                                <span>Total Amount</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>

                            <button className="checkout-btn">
                                PLACE ORDER →
                            </button>

                            <p className="secure-text">
                                🔒 Safe and Secure Shopping
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </main>
    );
}

export default Cart;
