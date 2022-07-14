import React from 'react';

export default function Footer() {
  return (
    <footer
      className="
      text-center
      flex flex-col md:flex-row md:items-center md:justify-between
      text-lg md:text-xl lg:text-2xl
      font-bold
      md:p-6 lg:px-10
      "
    >
      <span>Feito com React, TailwindCss e dedicação</span>
      <span className="my-3 md:m-0">Rodrigo Lima &copy; 2022</span>
    </footer>
  );
}
