import React from "react";
import "../global.css";
import "../App.js";


const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="Body.js">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="AnimatedContainer.js">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ProfileContent.js">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;