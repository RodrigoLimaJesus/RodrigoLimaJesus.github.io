import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header() {
  function handleMenu({ target }) {
    const btn = target.closest('button');

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
      </header>
  )
}
