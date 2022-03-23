import React from 'react';
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiGithub } from 'react-icons/si';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

import MyImage from './images/eu.jpeg';

import Header from './components/Header';
import ProgrammigGif from './images/programming.gif';

export default function App() {
  const stacksFrontend = [
    { name: 'CSS', Icon: DiCss3, color: 'blue' },
    { name: 'HTML', Icon: DiHtml5, color: 'orange' },
    { name: 'JAVASCRIPT', Icon: DiJavascript, color: 'yellow' },
    { name: 'REDUX', Icon: SiRedux, color: 'purple' },
    { name: 'REACT', Icon: DiReact, color: 'blue' },
    { name: 'GITHUB', Icon: SiGithub, color: '' },
    { name: 'GIT', Icon: DiGit, color: 'orange' },
  ];

  const projects = [
    {
      name: 'TrybeWallet',
      image: '',
      link: './trybewallet',
      mobile: false,
      desktop: true,
    },
  ];

  return (
    <div>
      <Header />

      <div className="container apresentation-container">
        <img
          src={ProgrammigGif}
          alt="Gif de pessoa programando"
          className="programmingGif"
        />
        <img
          src={MyImage}
          alt="Minha imagem de perfil"
          className="profile-image"
        />
        <p>
          Sou brasileiro natural de Manaus/Am, atualmente estudo engenharia da
          computação na Universidade Federal do Amazonas e desenvolvimento web
          na{' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
            Trybe
          </a>
          , uma escola que vai além do ensino tradicional e incentiva muito o
          desenvolvimento das soft skills. Sou formado pela mesma como
          desenvolvedor front-end Jr e agora me aprofundo nos conhecimentos do
          back-end para dar início à carreira full-stack.
        </p>
      </div>

      <div className="container skills-container">
        <h2 className="light-blue">{'<Frontend>'}</h2>
        <div>
          {stacksFrontend.map(({ name, Icon, color }) => (
            <span key={name} className={color}>
              <Icon />
              {name}
            </span>
          ))}
        </div>
        <h2 className="light-blue">{'</Frontend>'}</h2>
      </div>

      <div className="container projects-container">
        <div className="projects-container-info">
          <p>
            Os projetos com designe para desktop têm o ícone <FaDesktop />, para
            mobile têm o ícone <FaMobileAlt />, e os responsivos possuem os dois
            ícones.
          </p>
          <img
            src={ProgrammigGif}
            alt="Gif de pessoa programando"
            className="programmingGif"
          />
        </div>
        <h2 className="light-blue">{'<Projetos>'}</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} />
              <span>
                {project.desktop && <FaDesktop />}
                {project.mobile && <FaMobileAlt />}
                {project.name}
              </span>
            </div>
          ))}
        </div>
        <h2 className="light-blue">{'</Projetos>'}</h2>
      </div>

      <footer className="footer-home">
        <span>Feito com React, CSS e dedicação.</span>
        <span>Rodrigo Lima &copy; 2022</span>
      </footer>
    </div>
  );
}
