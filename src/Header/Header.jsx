import React from 'react';
import image from '../assets/logo-67.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img decoding="async" src={image} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#explore-food">Explore Foods</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">Recipes</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li>
                <button className="main-btn">Sign Up</button>
              </li>
              <li>
                <button className="main-btn"><i className="fa-regular fa-heart"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
