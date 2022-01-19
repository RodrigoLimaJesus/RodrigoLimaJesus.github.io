import React, { useContext, useState } from 'react';

import WalletContext from "../contexts/WalletContext";
import { getExchange } from "../services/currenciesApi";

export default function Header() {
  const { currencies, methods, tags, addExpense } = useContext(WalletContext);

  const [expense, setExpense] = useState({
    value: '',
    currency: currencies[0],
    method: methods[0],
    tag: tags[0],
    description: '',
  })

  function handleInputChange({ target }) {
    setExpense((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  async function handleSubmitExpense(e) {
    e.preventDefault();
    const exchange = await getExchange(expense.currency);
    addExpense({...expense, exchange});
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
              <option key={ method } value={ method }>{method}</option>
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
              <option key={ tag } value={ tag }>{tag}</option>
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
          Adicionar despesa
        </button>
      </form>
    </header>
  );
}
