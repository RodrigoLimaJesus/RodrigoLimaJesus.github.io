import React from 'react';
import { IoMenu } from 'react-icons/io5';
import ToggleThemeBtn from './components/ToggleThemeBtn';

export default function Header({ changeTheme }) {
  return (
    <header className="flex justify-between items-center p-3">
      <div className="flex items-center text-2xl">
        <button className="mr-2">
          <IoMenu />
        </button>

        <h1
          className="
          font-bold
          text-sky-800 dark:text-orange-400
          text-3xl
          "
        >
          Rodrigo
        </h1>
      </div>

      <ToggleThemeBtn changeTheme={changeTheme} />
    </header>
  );
}
