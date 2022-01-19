import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import SideBar from './SideBar';

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  function handleMenu({ target }) {
    const btn = target.closest('button');

    if (!btn.classList.contains('show-menu')) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }

    btn.classList.toggle('show-menu');
  }

  return (
    <header className="header">
      <h1>Rodrigo <span className="orange">Lima</span></h1>

      <button
        type="button"
        className="btn-header-menu"
        onClick={ handleMenu }
      >
        <GiHamburgerMenu />
      </button>

      <SideBar isVisible={ showSideBar } />
    </header>
  )
}
