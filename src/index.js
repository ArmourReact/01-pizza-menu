import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const [openHour, closeHour] = [12, 22];
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
};

const Pizza = () => {
  return (
    <div>
      <img alt="Pizza Spinaci" src="pizzas/spinaci.jpg" />
      <h3>Pizza Spinaci</h3>
      <p>ingredients</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
