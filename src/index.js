import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./index.css"; // or the path to your main CSS file
import ClassesNavbar from "./components/ClassesNavbar";

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <ClassesNavbar />


      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById("root")
);
