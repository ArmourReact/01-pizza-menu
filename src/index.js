import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
};
  return <h1>Hello React</h1>;

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
