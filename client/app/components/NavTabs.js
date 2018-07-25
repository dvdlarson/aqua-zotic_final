import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">

      <Link
        to="/"
        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/fishgallery"
        className={window.location.pathname === "/fishgallery" ? "nav-link active" : "nav-link"}>
        Tank Gallery
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/counters"
        className={window.location.pathname === "/counters" ? "nav-link active" : "nav-link"}>
        Counters
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/inventory"
        className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
        Our Products
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/newsletter"
        className={window.location.pathname === "/newsletter" ? "nav-link active" : "nav-link"}>
        Newsletter
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/contact"
        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Questions
      </Link>
    </li>


    <li className="nav-item">
      <Link
        to="/admin"
        className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}>
        Admin
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/products"
        className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}>
        Edit Products
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/login"
        className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/checkout"
        className={window.location.pathname === "/checkout" ? "nav-link active" : "nav-link"}>
        Checkout
      </Link>
    </li>

    {/* <li className="nav-item">
      <Link
        to="/search"
        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
        Search
      </Link>
    </li> */}

  </ul>
);

export default NavTabs;
