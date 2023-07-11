import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
    </div>
  );
};

const Footer = () => {
  return <h1>Hello React</h1>;
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
  );
};

const Pizza = () => {
  return (
    <div>
      <img alt="Pizza Spinaci" src="pizzas/spinaci.jpg" />
      <h2>Pizza Spinaci</h2>
      <p>ingrediants</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
