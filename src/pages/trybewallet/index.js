import React from 'react';

import './styles/index.css';
import './styles/table.css';

import Table from './components/Table';

import WalletProvider from './contexts/WalletProvider';
import ExpenseForm from './components/ExpenseForm';
import ExpenseAddBtn from './components/ExpenseAddBtn';

export default function Wallet() {
  return (
    <div className="wallet-page">
      <WalletProvider>
        <header className="header-wallet">
          <h1><span className="green">Trybe</span>Wallet</h1>
        </header>
        
        <ExpenseForm />
        
        <Table />
        
        <ExpenseAddBtn />
      </WalletProvider>
    </div>
  );
}
