import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import NavBar from './components/NavBar';
import ToggleThemeBtn from './components/ToggleThemeBtn';

export default function Header({ changeTheme }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header
      className="
      flex justify-between items-center
      p-3 md:px-6 lg:px-9
      "
    >
      <div className="flex items-center text-2xl sm:text-3xl">
        <button className="mr-2 sm:hidden" onClick={() => setIsMenuVisible(true)}>
          <IoMenu />
        </button>

        <h1
          className="
          font-bold
          text-sky-800 dark:text-orange-400
          text-3xl sm:text-4xl
          "
        >
          Rodrigo
        </h1>
      </div>

      <div className="sm:flex items-center">
        <NavBar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />

        <ToggleThemeBtn changeTheme={changeTheme} />
      </div>
    </header>
  );
}
