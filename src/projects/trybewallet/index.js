import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Wallet from './pages/Wallet';

export default function TrybeWallet() {
  return (
    <Routes>
      <Route path="/" element={ <Wallet /> }/>
    </Routes>
  );
}
