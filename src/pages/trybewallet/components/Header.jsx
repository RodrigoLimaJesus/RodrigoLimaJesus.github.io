import React, { useContext, useState, useEffect } from 'react';

import WalletContext from '../contexts/WalletContext';
import { getExchange } from '../services/currenciesApi';
import Input from './Input';

export default function Header() {
  const {
    placeholders,  currencies,  methods,  tags,  addExpense,  editExpense, editInfo
  } = useContext(WalletContext);
  
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    const { expense, isEditing } = editInfo;

    if (isEditing) {
      setValue(expense.value);
      setCurrency(expense.currency);
      setMethod(expense.method);
      setTag(expense.tag);
      setDescription(expense.description);
    }
  }, [editInfo])

  async function handleSubmitExpense(e) {
    e.preventDefault();
    const { expense, isEditing } = editInfo;
    console.log(expense)
    const expenseData = {
      id: expense.id,
      value: value || 0,
      currency: currency || placeholders.currency,
      method: method || placeholders.method,
      tag: tag || placeholders.tag,
      description,
    };
    
    if (currencies.includes(expenseData.currency)) {
      const exchange = await getExchange(expenseData.currency);

      if (isEditing) {
        editExpense({ ...expenseData, exchange })
      } else {
        addExpense({ ...expenseData, exchange });
      }
      setValue('');
      setCurrency('');
      setMethod('');
      setTag('');
      setDescription('');
    }
  }

  return (
    <header>
      <div>
        <h1>TrybeWallet</h1>
      </div>
      <form onSubmit={ handleSubmitExpense }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>

        <Input
          label="Moeda:"
          id="currency"
          placeholder={ placeholders.currency }
          value={ currency }
          onChange={ (e) => setCurrency(e.target.value) }
          detailId="currencies"
          options={ currencies }
        />

        <Input
          label="Método de pagamento:"
          id="method"
          placeholder={ placeholders.method }
          value={ method }
          onChange={ (e) => setMethod(e.target.value) }
          detailId="methods"
          options={ methods }
        />

        <Input
          label="Tag:"
          id="tag"
          placeholder={ placeholders.tag }
          value={ tag }
          onChange={ (e) => setTag(e.target.value) }
          detailId="tags"
          options={ tags }
        />

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          />
        </label>

        <button type="submit">
          {editInfo.isEditing ? 'Editar Despesa' : 'Adicionar despesa'}
        </button>
      </form>
    </header>
  );
}
