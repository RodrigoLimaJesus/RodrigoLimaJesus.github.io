import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import MyImage from '../images/eu.jpeg';

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
      <h1>Rodrigo <span className="light-blue">Lima</span></h1>

      <button
        type="button"
        className="btn-header-menu"
        onClick={ handleMenu }
      >
        <GiHamburgerMenu />
      </button>

      <div className={`side-bar ${classSideBar}`} >
        <div>
          <img src={ MyImage } alt="Minha imagem de perfil" />
          <nav>
            <a
              href="https://www.linkedin.com/in/rodrigo-lima-jesus/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin /> Linkedin
            </a>
            <a
              href="https://github.com/RodrigoLimaJesus"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> Github
            </a>
          </nav>
        </div>

        <div>
          <span>By Rodrigo Lima</span>
        </div>
      </div>

    </header>
  )
}
