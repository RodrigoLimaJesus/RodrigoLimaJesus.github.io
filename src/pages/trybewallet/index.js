import React from 'react';

import './styles/index.css';
import './styles/header.css';
import './styles/table.css';

import Header from './components/Header';
import Table from './components/Table';

import WalletProvider from './contexts/WalletProvider';

export default function Wallet() {
  return (
    <div className="wallet-page">
      <WalletProvider>
        <Header />
        <Table />
      </WalletProvider>
    </div>
  );
}
