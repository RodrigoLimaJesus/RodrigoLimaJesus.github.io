import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import MyImage from '../images/eu.jpeg';

export default function Header() {
  const [classSideBar, setClassSideBar] = useState('');

  const mapLinks = [
    {
      Icon: <BsLinkedin />,
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/rodrigo-lima-jesus/',
    },
    {
      Icon: <BsGithub />,
      name: 'Github',
      link: 'https://github.com/RodrigoLimaJesus',
    },
  ];

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
      return 'hide-side-bar';
    });
  }

  return (
    <header className="flex justify-between items-center bg-app-container-dark text-3xl font-bold p-6 rounded-b-2xl lg:text-4xl">
      <h1>
        Rodrigo <span className="text-cyan-300">Lima</span>
      </h1>

      <button
        type="button"
        className="relative flex items-center right-0 sm:hidden"
        onClick={handleMenu}
      >
        <GiHamburgerMenu />
      </button>

      <aside
        className={`${classSideBar} fixed flex flex-col  bg-app-container-dark h-screen top-0 right-0 w-0 sm:shadow-none sm:bg-transparent sm:h-auto sm:w-fit sm:relative`}
      >
        <img
          src={MyImage}
          alt="Minha imagem de perfil"
          className="w-4/6 self-center my-6 rounded-xl shadow-md shadow-white sm:hidden"
        />
        <nav className="w-full flex flex-col sm:flex-row ">
          {mapLinks.map(({ link, Icon, name }) => (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={link}
              key={link}
              className="flex flex-row w-4/5 mx-auto my-2 text-app-links duration-300 sm:mx-2 sm:hover:text-app-links-hover"
            >
              <span className="mr-2">{Icon}</span>
              {name}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
