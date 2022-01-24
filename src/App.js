import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Wallet from "./pages/trybewallet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/trybewallet" element={ <Wallet /> }/>
    </Routes>
  );
}
