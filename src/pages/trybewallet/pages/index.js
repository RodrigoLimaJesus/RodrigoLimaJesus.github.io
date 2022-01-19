import React from 'react';
import Header from "../components/Header";

import WalletProvider from "../contexts/WalletProvider";

export default function Wallet() {
  return (
    <WalletProvider>
      <Header />
    </WalletProvider>
  );
}
