import { Link } from "react-router-dom";
import { Button } from "./components/atoms";
import { useState } from "react";
import Register from "./login/register/register";
import Login from "./login/login";
import Header from "./scss/components/Header";
import "./scss/login.scss";

const funcionDelClick = () => {
  console.log("me clickearon banda");
};

function App() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <h1>Patterns</h1>
      <Link to="/Patterns">Patterns</Link>
      <Button
        text="soy un botón"
        type="info"
        onClick={funcionDelClick}
        width={"180px"}
        height={"50px"}
      />
      <input />
    </>
  );
}

export default App;
