import React from 'react';

import './styles/header.css';

import Header from './components/Header';
import Table from './components/Table';

import WalletProvider from './contexts/WalletProvider';

export default function Wallet() {
  return (
    <WalletProvider>
      <Header />
      <Table />
    </WalletProvider>
  );
}
