import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Wallet from "./pages/trybewallet/pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/trybewallet" element={ <Wallet /> }/>
    </Routes>
  );
}
