import React, { useContext } from 'react';

import WalletContext from "../contexts/WalletContext";

export default function Header() {
  const { tags, methods } = useContext(WalletContext);

  return (
    <header>
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value"/>
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option>URL</option>
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select id="method">
            {methods.map(method => (
              <option key={ method } value={ method }>{method}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
          {tags.map(tag => (
              <option key={ tag } value={ tag }>{tag}</option>
            ))}
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" id="description"/>
        </label>

        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    </header>
  );
}
