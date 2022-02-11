import React, { useContext } from 'react'
import { AiOutlinePlus } from  'react-icons/ai';

import WalletContext from '../contexts/WalletContext';

export default function ExpenseAddBtn() {
  const { setIsFormVisible } = useContext(WalletContext);

  return (
    <button
      type="button"
      onClick={ () => setIsFormVisible(prevState => ({...prevState, isVisible: true})) }
      className="expense-add-btn"
    >
      <AiOutlinePlus />
    </button>
  )
}
