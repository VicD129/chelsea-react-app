import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <React.Fragment>
      <header className="fixed-top bg-brand-color text-white text-center">
        <h1 className="display-3 font-weight-bold py-3">CHELSEA FC</h1>
        <nav className="navbar">
          <div className="container-fluid">
              <div className="collapsed navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-row justify-content-around">
                    <li className="nav-item">
                    <Link className="nav-link text-white font-weight-bolder" to="/">DETAILS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white font-weight-bolder" to="/matches">MATCHES</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white font-weight-bolder" to="/standings">STANDINGS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white font-weight-bolder" to="/squad">SQUAD</Link>
                    </li>
                </ul>
              </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
