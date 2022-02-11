import React, { useContext } from 'react';

import { BsFillTrashFill, BsInfoCircle } from 'react-icons/bs';

import WalletContext from '../contexts/WalletContext';

export default function Table() {
  const { expenses, rmvExpense, setIsFormVisible } = useContext(WalletContext);

  return (
    <table className="wallet-table">
      <thead>
        <tr>
          <th>Despesas</th>
          <th>Info / Deletar</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense, index) => {
          const { exchange, value } = expense;
          
          return (
            <tr key={ index }>
              <td>{expense.description}</td>
              <td>{(Number(value) * Number(exchange.ask)).toFixed(2)}</td>
              <td className="edit-delete-btns">
                <button
                  type="button"
                  onClick={ () => {
                    setIsFormVisible({ isEditing: true, isVisible: true, expense });
                  }}>
                  <BsInfoCircle />
                </button>
                <button type="button" onClick={ () => rmvExpense(expense.id) }>
                  <BsFillTrashFill />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
