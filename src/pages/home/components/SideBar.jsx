import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import MyImage from '../images/eu.jpeg';

export default function SideBar({ classSideBar }) {

  return (
    <div className={`side-bar ${classSideBar}`} >
      <div>
        <img src={ MyImage } alt="Minha imagem de perfil" />
        <nav>
          <a href="https://www.linkedin.com/in/rodrigo-lima-jesus/">
            <BsLinkedin /> Linkedin
          </a>
          <a href="https://github.com/RodrigoLimaJesus">
            <BsGithub /> Github
          </a>
        </nav>
      </div>

      <div>
        <span>By Rodrigo Lima</span>
      </div>
    </div>
  )
}
