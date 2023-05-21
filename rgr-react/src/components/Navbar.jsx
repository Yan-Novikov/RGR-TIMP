import React from "react";
import "../styles/checkmark.css";
import { Link } from "react-router-dom";

const Navbar = function(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" Link to="/">
            <img src={require("../images/Logo.png")} alt="That's not a problem" width="65ex"/>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" Link to="/history">Orden history</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" Link to="/characters">Famous characters</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link Link to="/authorization">
                <button class="btn btn-outline-light signIn" type="button">Sign In</button>
              </Link>
              <Link Link to="/registration">
                <button class="btn btn-outline-success" type="button">Sign Up</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;