import React from 'react';
import './style.css';

function navbar({ itemsInCart }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <h1 style={{ fontSize: '3rem', textTransform: 'uppercase', letterSpacing: "0.2rem", fontWeight: 700 }}>Mozart</h1>
      </div>

      <div className="nav-list">
        <ul>
          <li>women</li>
          <li>men</li>
          <li>children</li>
          <li>pets</li>
          <li>books</li>
          <li>food</li>
        </ul>
      </div>

      <div className="cart">
        <i className="fa fa-shopping-cart" style={{ fontSize: '3rem' }}></i>
        <p className="itemcount-badge"><span>{itemsInCart}</span></p>
      </div>
    </nav>
  );
}

export default navbar;