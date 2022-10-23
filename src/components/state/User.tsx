import React from "react";
import { useState } from "react";
import { AuthUser } from "../Person.types";

function User({ name, email }: AuthUser) {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "Lan", email: "lanbd1998@gmail.com" });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <div>User is {isUser ? "Logged in" : "Logged out"}</div> */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
}

export default User;
