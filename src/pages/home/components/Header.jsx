import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import SideBar from './SideBar';

export default function Header() {
  const [classSideBar, setClassSideBar] = useState('');

  function handleMenu({ target }) {
    const btn = target.closest('button');
    const containsShow = btn.classList.contains('show-menu');
    const containsHide = btn.classList.contains('hide-menu');

    if (!containsHide && !containsShow) {
      btn.classList.add('show-menu');
    } else {
      btn.classList.toggle('show-menu');
      btn.classList.toggle('hide-menu');
    }
    setClassSideBar((prevState) => {
      if (prevState === '' || prevState.includes('hide-side-bar')) {
        return 'show-side-bar';
      }
      return 'hide-side-bar'
    });
  }

  return (
    <header className="header">
      <h1>Rodrigo <span className="light-green">Lima</span></h1>

      <button
        type="button"
        className="btn-header-menu"
        onClick={ handleMenu }
      >
        <GiHamburgerMenu />
      </button>

      <SideBar classSideBar={ classSideBar } />
    </header>
  )
}
