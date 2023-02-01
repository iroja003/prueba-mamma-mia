// react
import React from 'react';
// react-router-dom
import { Routes, Route } from "react-router-dom";
// react- boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/"           element={<Home />}  />
          <Route path="/pizzas"     element={<Pizzas />}/>
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/cart"       element={<Cart />}  />
          <Route path="*"           element={<h1>404:Error</h1>} />
        </Routes>
      </main>
    </div>
  );
}
