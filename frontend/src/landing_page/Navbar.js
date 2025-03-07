import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src='media/images/logo.svg' alt='zerodha' style={{ width: "25%" }} />       
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Support">Support</Link>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link active" href="https://zerodha-2-cdqs.onrender.com/" target="_blank" rel="noopener noreferrer">Dashboard</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
