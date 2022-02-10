import React, { useEffect, useState } from 'react';

import WalletContext from './WalletContext';
import { getCurrencies } from '../services/currenciesApi';

export default function WalletProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [currencies, setCurrencies] = useState(['BRL']);
  const [expenses, setExpenses] = useState([]);
  const [editInfo, setEditInfo] = useState({ isEditing: false, expense: {} });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Trasnporte', 'Saúde'];
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const placeholders = { currency: currencies[0], method: methods[0], tag: tags[0] };

  useEffect(() => {
    const currenciesToIgnore = ['USDT'];

    async function initialFetchs() {
      const response = await getCurrencies();
      setCurrencies(prevState => [
        ...prevState,
        ...response.filter(currency => !currenciesToIgnore.includes(currency))
      ]);
    }
    if (!isMounted) {
      initialFetchs();
      const storageExpenses = localStorage.getItem('trybewallet-expenses');
      setExpenses(JSON.parse(storageExpenses) || []);
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    localStorage.setItem('trybewallet-expenses',JSON.stringify(expenses));
  }, [expenses])

  function addExpense(expenseData) {
    setExpenses(prevState => [
      ...prevState,
      { ...expenseData, id: prevState.length }
    ]);
  }

  function rmvExpense({ target }) {
    const filtredExpenses = expenses.filter(({ id }) => id !== Number(target.id) );
    const adjustedIds = filtredExpenses.map((expense, index) => ({...expense, id: index}));
    setExpenses(adjustedIds);
  }

  function editExpense(expenseData) {
    setExpenses(expenses.map(curr => (curr.id === expenseData.id) ? {...expenseData} : curr));
    setEditInfo({ isEditing: false, expense: {} });
  }

  return isMounted && (
    <WalletContext.Provider value={{
      currencies,
      methods,
      tags,
      expenses,
      placeholders,
      editInfo,
      setEditInfo,
      addExpense,
      rmvExpense,
      editExpense,
      isFormVisible,
      setIsFormVisible
    }}>
      {children}
    </WalletContext.Provider>
  );
}
