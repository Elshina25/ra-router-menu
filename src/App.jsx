import React from "react";
import HomePage from "./pages/HomePage";
import ForzaPage from "./pages/ForzaPage";
import DriftPage from "./pages/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={ <HomePage /> } />
          <Route path="/drift" element={ <DriftPage /> } />
          <Route path="/timeattack" element={ <TimeAttackPage /> } />
          <Route path="/forza" element={ <ForzaPage /> } />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}