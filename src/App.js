import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buyer, Homepage, Login, Order, Seller, Signup } from "./Pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/seller" element={<Seller />} />
          <Route exact path="/user" element={<Buyer />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
