import React from 'react';
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiGithub } from 'react-icons/si';

import Header from './components/Header';
import ProgrammigGif from './images/programming.gif';

export default function App() {
  const stacksFrontend = [
    {name: 'CSS', Icon: DiCss3, color: 'blue'},
    {name: 'HTML', Icon: DiHtml5, color: 'orange'},
    {name: 'JAVASCRIPT', Icon: DiJavascript, color: 'yellow'},
    {name: 'REDUX', Icon: SiRedux, color: 'purple'},
    {name: 'REACT', Icon: DiReact, color: 'blue'},
    {name: 'GITHUB', Icon: SiGithub, color: ''},
    {name: 'GIT', Icon: DiGit, color: 'orange'},
  ];

  const projects = [1,2,3,4];

  return (
    <div>
      <Header />
      <div className="container apresentation-container">
        <img
          src={ProgrammigGif}
          alt="Gif de pessoa programando"
        />
        <p>Sou brasileiro natural de Manaus/Am, atualmente estudo desenvolvimento web na <a href="https://www.betrybe.com/">Trybe</a>, uma escola que vai além do ensino padrão e incentiva muito a comunicação. Sou formado pela mesma como dev front-end Jr e agora me aprofundo nos conhecimentos do back-end para dar início à carreira full-stack.</p>
      </div>

      <div className="container skills-container">
        <h2 className="light-green">{"<Frontend>"}</h2>
        <div>
          {stacksFrontend.map(({name, Icon, color}) => (
            <span key={ name } className={ color }><Icon />{name}</span>
          ))}
        </div>
        <h2 className="light-green">{"</Frontend>"}</h2>
      </div>

      <div className="container projects-container">
        <h2 className="light-green">{"<Projetos>"}</h2>
        <div>
          {projects.map((_, index) => (
            <p key={ index }>{`Projeto ${index}`}</p>
          ))}
        </div>
        <h2 className="light-green">{"</Projetos>"}</h2>
      </div>
    </div>
  );
}
