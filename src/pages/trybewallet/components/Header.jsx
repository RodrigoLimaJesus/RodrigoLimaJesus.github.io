import React, { useContext } from 'react';

import WalletContext from "../contexts/WalletContext";
import { getExchange } from "../services/currenciesApi";

export default function Header() {
  const {
    currencies,
    methods,
    tags,
    addExpense,
    expense,
    setExpense,
    editExpense,
  } = useContext(WalletContext);

  function handleInputChange({ target }) {
    setExpense((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  async function handleSubmitExpense(e) {
    e.preventDefault();
    const exchange = await getExchange(expense.currency);
    if (expense.isEditing) {
      editExpense({...expense, exchange})
    } else {
      addExpense({...expense, exchange});
    }
  }


  return (
    <header>
      <form onSubmit={ handleSubmitExpense }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ expense.value }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            onChange={ handleInputChange }
            defaultValue={ expense.currency }
          >
            {currencies.map(currency => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            onChange={ handleInputChange }
          >
            {methods.map(method => (
              <option key={ method } value={ method } selected={ expense.method === method }>{method}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            onChange={ handleInputChange }
          >
          {tags.map(tag => (
              <option key={ tag } value={ tag } selected={ expense.tag === tag }>{tag}</option>
            ))}
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            value={ expense.description }
            onChange={ handleInputChange }
          />
        </label>

        <button type="submit">
          {expense.isEditing ? 'Editar Despesa' : 'Adicionar despesa'}
        </button>
      </form>
    </header>
  );
}
