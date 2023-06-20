import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <div className={`${isDarkMode ? "dark-mode" : ""}`}>
        <nav
          className={`navbar navbar-expand-lg navbar-light ${
            isDarkMode ? "bg-light" : "bg-dark"
          }`}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              {" "}
              GITHUB
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/repos">
                    Repos
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )}
                {isAuthenticated && <li className="user_name">{user.name}</li>}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
