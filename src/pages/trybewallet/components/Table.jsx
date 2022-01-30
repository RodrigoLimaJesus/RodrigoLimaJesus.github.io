import React, { useContext } from 'react';

import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { TiArrowRightThick } from 'react-icons/ti';

import WalletContext from '../contexts/WalletContext';

export default function Table() {
  const { expenses, rmvExpense, setEditInfo } = useContext(WalletContext);

  return (
    <table className="wallet-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método</th>
          <th>Valor</th>
          <th>Câmbio</th>
          <th>Valor convertido</th>
          <th>Conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => {
          console.log(expense);
          const { exchange, value } = expense;
          
          return (
          <tr key={ index }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{value}</td>
            <td>{Number(exchange.ask).toFixed(2)}</td>
            <td>{(Number(value) * Number(exchange.ask)).toFixed(2)}</td>
            <td>
              {`${exchange.code} `} <TiArrowRightThick /> {` ${exchange.codein}`}
            </td>
            <td className="edit-delete-btns">
              <button
                type="button"
                onClick={ () => setEditInfo({isEditing: true, expense}) }
              >
                <BsPencilFill />
              </button>
              <button type="button" onClick={ rmvExpense } id={ expense.id }>
                <BsFillTrashFill />
              </button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
  );
}
