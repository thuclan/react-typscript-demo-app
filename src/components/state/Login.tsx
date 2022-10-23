import React, { useState } from "react";

import { AuthUser } from "../Person.types";

function LoggedIn({ name, email }: AuthUser) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
      <div>User name is</div>
      <div>User email is</div>
    </div>
  );
}

export default LoggedIn;
