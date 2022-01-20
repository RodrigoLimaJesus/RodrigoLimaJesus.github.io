import React, { useContext } from 'react';

import WalletContext from "../contexts/WalletContext";

export default function Table() {
  const { expenses, rmvExpense, setExpenseToEdit } = useContext(WalletContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => {
          const { exchange, value } = expense;
          const [exchangeUsed, conversionCurrency] = exchange.name.split('/');
          
          return (
          <tr key={ index }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{value}</td>
            <td>{exchangeUsed}</td>
            <td>{exchange.ask}</td>
            <td>{Number(value) * Number(exchange.ask)}</td>
            <td>{conversionCurrency}</td>
            <td>
              <button type="button" onClick={ () => setExpenseToEdit(expense) }>
                Editar
              </button>
              <button type="button" onClick={ rmvExpense } id={ expense.id }>
                Excluir
              </button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
  );
}
