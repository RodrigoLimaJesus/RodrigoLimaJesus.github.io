import React from 'react';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
} from 'react-icons/di';
import { SiRedux, SiGithub } from 'react-icons/si';

import Header from './components/Header';
import ProgrammigGif from './images/programming.gif';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container apresentation-container">
        <img
          src={ProgrammigGif}
          alt="Gif de pessoa programando"
        />
        <p>Estudante de desenvolvimento web na <a href="https://www.betrybe.com/">Trybe</a>, atualmente formado como dev front-end Jr e me aprofundando nos conhecimentos básicos do back-end.</p>
      </div>

      <div className="container skills-container">
        <h2 className="blue">{"<Frontend>"}</h2>
        <div>
          <span className="blue"><DiCss3 />CSS</span>
          <span className="orange"><DiHtml5 />HTML</span>
          <span className="yellow"><DiJavascript />JAVASCRIPT</span>
          <span className="blue"><DiReact />REACT</span>
          <span className="orange"><DiGit />GIT</span>
          <span className="purple"><SiRedux />REDUX</span>
          <span><SiGithub />GITHUB</span>
        </div>
        <h2 className="blue">{"</Frontend>"}</h2>
      </div>
    </div>
  );
}
