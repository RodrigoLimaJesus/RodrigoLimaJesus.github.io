import React from 'react';
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiGithub } from 'react-icons/si';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles/index.css';
import './styles/header.css';

import Header from './components/Header';
import ProgrammigGif from './images/programming.gif';
import Trybewallet from './images/trybewallet.png';

export default function Home() {
  const stacksFrontend = [
    {name: 'CSS', Icon: DiCss3, color: 'blue'},
    {name: 'HTML', Icon: DiHtml5, color: 'orange'},
    {name: 'JAVASCRIPT', Icon: DiJavascript, color: 'yellow'},
    {name: 'REDUX', Icon: SiRedux, color: 'purple'},
    {name: 'REACT', Icon: DiReact, color: 'blue'},
    {name: 'GITHUB', Icon: SiGithub, color: ''},
    {name: 'GIT', Icon: DiGit, color: 'orange'},
  ];

  const projects = [
    {name: 'TrybeWallet', image: Trybewallet, link: './trybewallet', mobile: false, desktop: true},
  ];

  return (
    <div>
      <Header />
      <div className="container apresentation-container">
        <img
          src={ProgrammigGif}
          alt="Gif de pessoa programando"
        />
        <p>
          Sou brasileiro natural de Manaus/Am, atualmente estudo engenharia da computação na Universidade Federal do Amazonas e desenvolvimento web na <a href="https://www.betrybe.com/">Trybe</a>, uma escola que vai além do ensino tradicional e incentiva muito o desenvolvimento das soft skills. Sou formado pela mesma como desenvolvedor front-end Jr e agora me aprofundo nos conhecimentos do back-end para dar início à carreira full-stack.
        </p>
      </div>

      <div className="container skills-container">
        <h2 className="light-blue">{"<Frontend>"}</h2>
        <div>
          {stacksFrontend.map(({name, Icon, color}) => (
            <span key={ name } className={ color }><Icon />{name}</span>
          ))}
        </div>
        <h2 className="light-blue">{"</Frontend>"}</h2>
      </div>

      <div className="container projects-container">
        <h2 className="light-blue">{"<Projetos>"}</h2>
        <p>
          Os projetos com designe apenas para desktop irão possuir o ícone <FaDesktop />, os com designe mobile irão possuir o ícone <FaMobileAlt />, e os com responsividade irão possuir os dois ícones.
        </p>
        <div>
          {projects.map((project) => (
            <Link to={ project.link } key={ project.name } className="project-card">
              <img src={ project.image } alt={ project.name }/>
              <span>
                {project.desktop && <FaDesktop />}
                {project.mobile && <FaMobileAlt />}
                {project.name}
              </span>
            </Link>
          ))}
        </div>
        <h2 className="light-blue">{"</Projetos>"}</h2>
      </div>
    </div>
  );
}
