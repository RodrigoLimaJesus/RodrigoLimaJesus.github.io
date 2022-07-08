import React from 'react';
import ToggleThemeBtn from './components/ToggleThemeBtn';

export default function Header({ changeTheme }) {
  return (
    <header>
      <ToggleThemeBtn changeTheme={changeTheme} />
    </header>
  );
}
