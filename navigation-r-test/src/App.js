import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ToDo from "./pages/ToDo";
import Slidebar from "./components/Slidebar";

export default function App() {
  return (
    <BrowserRouter>
      <Slidebar>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </Slidebar>
    </BrowserRouter>
  );
}
