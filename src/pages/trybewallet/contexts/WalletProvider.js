import React, { useEffect, useState } from 'react';

import WalletContext from "./WalletContext";
import { getCurrencies } from "../services/currenciesApi";

export default function WalletProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Trasnporte', 'Saúde'];
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  useEffect(() => {
    async function fetchCurrencies() {
      const response = await getCurrencies();
      setCurrencies(['BRL', ...response]);
      setIsMounted(true);
    }

    fetchCurrencies();
  }, []);


  function addExpense(expenseData) {
    setExpenses(prevState => [
      ...prevState,
      {
      id: prevState.length,
      ...expenseData,
      }
    ])
  }

  return isMounted && (
    <WalletContext.Provider value={{
      currencies,
      methods,
      tags,
      expenses,
      addExpense,
    }}>
      {children}
    </WalletContext.Provider>
  );
}
