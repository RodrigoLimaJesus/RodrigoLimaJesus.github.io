import React from 'react';

import WalletContext from "./WalletContext";

export default function WalletProvider({ children }) {
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Trasnporte', 'Saúde'];
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  return (
    <WalletContext.Provider value={{
      tags,
      methods,
    }}>
      {children}
    </WalletContext.Provider>
  );
}
