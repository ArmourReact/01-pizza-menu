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
  const hasPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {hasPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((p) => (
              <Pizza key={p.name} pizza={p} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
};

const Pizza = ({ pizza }) => {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  if (soldOut) return null;

  return (
    <li className="pizza">
      <img alt={name} src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const [openHour, closeHour] = [12, 22];
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order hour={closeHour} />
      ) : (
        <p>We're sorry! We are currently closed! We reopen at {openHour}:00</p>
      )}
    </footer>
  );
};

const Order = ({ hour }) => {
  return (
    <div className="order">
      <p>We're open until {hour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
