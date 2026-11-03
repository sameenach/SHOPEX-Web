
"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { CartContext } from "../context/CartContext";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { cart } = useContext(CartContext);

  return (
    <nav className="my-navbar">

      {/* Logo */}
      <Link className="my-brand" href="/">
        Shopex<span>.</span>
      </Link>

      {/* Search */}
      {pathname === "/Product" && (
        <form action="/Product" method="GET" className="nav-search-form">
          <input
            type="text"
            name="search"
            placeholder="Search your style..."
          />
          <button type="submit">⌕</button>
        </form>
      )}

      {/* Mobile Toggle */}
      <button
        className="my-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`my-menu ${open ? "my-menu-open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/Product" onClick={() => setOpen(false)}>Shop</Link>
        <Link href="/About" onClick={() => setOpen(false)}>About</Link>
        <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link>

        {/* Cart Icon */}
        <Link href="/Cart" className="cart-icon-link">
  <span className="wishlist-symbol">♡</span>
  <span className="cart-count">{cart.length}</span>
</Link>
      </div>

    </nav>
  );
}
