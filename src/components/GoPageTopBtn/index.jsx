import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

export default function GoPageTopBtn() {
  return (
    <button
      onClick={() => {
        window.document.getElementById('page-top').scrollIntoView({ behavior: 'smooth' });
      }}
      className="
      fixed bottom-4 right-4 md:bottom-8 md:right-8
      text-3xl
      transition
      bg-sky-800 dark:bg-orange-400
      text-white dark:text-black
      hover:text-black dark:hover:text-white
      flex items-center
      p-2
      rounded-lg
      "
      title="Voltar ao topo da página?"
    >
      <span className="hidden text-base mr-2 sm:inline">Voltar ao topo</span>
      <BsArrowUpCircle />
    </button>
  );
}
