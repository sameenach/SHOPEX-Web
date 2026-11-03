
"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Get cart data from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

        setIsLoaded(true);
    }, []);

    // Save cart data
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
