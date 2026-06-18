import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light border-bottom"style={{backgroundColor:"white"}}>
        <Link class="navbar-brand" to="/">
          <img style={{width:"25%"}}src="media/images/logo.svg" alt="logo" className="ms-5"/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse p-2 ms-5" id="navbarSupportedContent">
          
          <form class="form-inline my-2 my-lg-0 ms-5">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
            
            
          </ul>
          </form>
        </div>
      </nav>
  );
}

export default Navbar;
