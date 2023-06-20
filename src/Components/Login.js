import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Navigate to="/repos" />;
  }

  
  return (
    <div>
      <div className="container">
        <form className="login-form">
          <h2>Click to Login</h2>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
