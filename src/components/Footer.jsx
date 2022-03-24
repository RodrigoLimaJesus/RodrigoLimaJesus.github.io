import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-app-container-dark rounded-t-2xl flex flex-col items-center text-center font-bold p-3 sm:text-lg md:flex-row md:justify-between md:px-5 lg:text-xl lg:px-8">
      <span className="my-1">
        Feito com React Js, Tailwind Css e dedicação.
      </span>
      <span className="my-1">Rodrigo Lima &copy; 2022</span>
    </footer>
  );
}
