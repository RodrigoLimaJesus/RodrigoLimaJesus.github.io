import React, { useEffect, useState } from 'react';

import WalletContext from "./WalletContext";
import { getCurrencies } from "../services/currenciesApi";

export default function WalletProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function teste() {
      const response = await getCurrencies();
      setCurrencies(response);
    }

    teste();
  }, [])

  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Trasnporte', 'Saúde'];
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  return (
    <WalletContext.Provider value={{
      currencies,
      methods,
      tags,
    }}>
      {children}
    </WalletContext.Provider>
  );
}
