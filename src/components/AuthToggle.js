import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthToggle() {
  const { isAuhenticated, toggleAuthHandler } = useContext(AuthContext);
  return (
    <button onClick={toggleAuthHandler}>
      {isAuhenticated ? "Logout" : "Login"}
    </button>
  );
}
