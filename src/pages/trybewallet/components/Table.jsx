import React, { useContext } from 'react';

import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { TiArrowRightThick } from "react-icons/ti";

import WalletContext from '../contexts/WalletContext';

export default function Table() {
  const { expenses, rmvExpense, setIsFormVisible } = useContext(WalletContext);

  return (
    <table className="wallet-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="wallet-table-1024">Tag</th>
          <th className="wallet-table-1024">Método</th>
          <th>Valor</th>
          <th className="wallet-table-925">Origem <TiArrowRightThick /> Conversão</th>
          <th>Editar / Deletar</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense, index) => {
          const { exchange, value } = expense;
          console.log(expense);
          
          return (
            <tr key={ index }>
              <td>{expense.description}</td>
              <td className="wallet-table-1024">{expense.tag}</td>
              <td className="wallet-table-1024">{expense.method}</td>
              <td>{(Number(value) * Number(exchange.ask)).toFixed(2)}</td>
              <td className="wallet-table-925">
                {exchange.code} <TiArrowRightThick /> {exchange.codein}
              </td>
              <td className="edit-delete-btns">
                <button
                  type="button"
                  onClick={ () => {
                    setIsFormVisible({ isEditing: true, isVisible: true, expense });
                  }}>
                  <BsPencilFill />
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
