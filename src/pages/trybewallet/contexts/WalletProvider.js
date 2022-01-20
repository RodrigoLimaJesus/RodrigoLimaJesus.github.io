import React, { useEffect, useState } from 'react';

import WalletContext from "./WalletContext";
import { getCurrencies } from "../services/currenciesApi";

export default function WalletProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Trasnporte', 'Saúde'];
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  const [expense, setExpense] = useState({
    value: 0,
    currency: currencies[0],
    method: methods[0],
    tag: tags[0],
    description: '',
  });

  const [expenseToEdit, setExpenseToEdit] = useState();

  const defaultValues = {
    value: 0,
    currency: currencies[0],
    method: methods[0],
    tag: tags[0],
    description: '',
  };

  useEffect(() => {
    async function fetchCurrencies() {
      const response = await getCurrencies();
      setCurrencies(['BRL', ...response.filter(currency => currency !== 'USDT')]);
      setIsMounted(true);
    }

    fetchCurrencies();
  }, []);

  useEffect(() => {
    setExpense((prevState) => ({...prevState, currency: currencies[0]}))
  }, [currencies]);

  useEffect(() => {
    if (expenseToEdit) {
      setExpense({...expenseToEdit, isEditing: true});
    }
  }, [expenseToEdit]);

  useEffect(() => {
    if (!isMounted) {
      const storageExpenses = localStorage.getItem('trybewallet-expenses');
      setExpenses(JSON.parse(storageExpenses) || [])
    }
  }, [isMounted]);

  useEffect(() => {
    localStorage.setItem('trybewallet-expenses',JSON.stringify(expenses))
  }, [expenses])

  function addExpense(expenseData) {
    setExpenses(prevState => [
      ...prevState,
      {
      id: prevState.length,
      ...expenseData,
      }
    ]);
    setExpense(defaultValues);
    setExpenseToEdit(undefined);
  }

  function rmvExpense({ target }) {
    const filtredExpenses = expenses.filter(({ id }) => id !== Number(target.id) );
    const fixIds = filtredExpenses.map((expense, index) => ({...expense, id: index}));
    
    setExpenses(fixIds);
    setExpense(defaultValues);
    setExpenseToEdit(undefined);
  }

  function editExpense(expenseData) {
    setExpenses(expenses.map((teste) => {
      if (teste.id === expense.id) {
        return ({...expenseData, isEditing: false});
      }

      return expenseData;
    }));

    setExpense(defaultValues);
    setExpenseToEdit(undefined);
  }

  return isMounted && (
    <WalletContext.Provider value={{
      currencies,
      methods,
      tags,
      expenses,
      expense,
      expenseToEdit,
      setExpenseToEdit,
      setExpense,
      addExpense,
      rmvExpense,
      editExpense,
    }}>
      {children}
    </WalletContext.Provider>
  );
}
