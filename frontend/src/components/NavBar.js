import React, { Component } from 'react';

class NavBar extends Component{
    render(){
      return(
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        
      <div className="container-fluid">
        <a className="navbar-brand" href="/" > <div class="text-danger" > <font face="Comic sans MS" size="5">
        <img
        src="https://www.freeiconspng.com/uploads/cook-book-icon-6.png"
        height="40"
        alt="Home"
        />&nbsp;My Recipe</font></div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="/List">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Create a recipe</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Contact</a></li>
                <li><a className="dropdown-item" href="#">Suggrestions</a></li>
                <li><a className="dropdown-item" href="#">FAQs</a></li>
                <li><a className="dropdown-item" href="#">Feedback</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
      )   
      
    }
  }
  export default NavBar;