import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TrybeWallet from "./projects/trybewallet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/trybewallet" element={ <TrybeWallet /> }/>
    </Routes>
  );
}
