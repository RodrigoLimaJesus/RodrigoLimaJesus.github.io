import React from 'react';

import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

import ProgrammigGif from '../images/programming.gif';

export default function Projects() {
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
  );
}
