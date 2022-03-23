import React from 'react';

import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

import Container from './Container';
import ContainerTitle from './ContainerTitle';

import MyFilms from '../images/myfilms.png';

export default function Projects() {
  const projects = [
    {
      name: 'MyFilms',
      image: MyFilms,
      link: 'https://myfilms.rodrigolimajesus.vercel.app/',
      stacks: ['Tailwind CSS', 'React Js', 'Context Api'],
      description:
        'Um app feito com muito carinho para treinar algumas stacks front-end, inspirado na queridinha Netflix e com consumo da API do The Movie DB',
      mobile: true,
      desktop: true,
    },
  ];

  return (
    <Container>
      <ContainerTitle title="<Projetos>" />

      <div>
        {projects.map((project, index) => (
          <div key={index} className="flex  flex-col-reverse">
            <div className="mr-3 flex flex-col">
              <h2 className="font-bold my-2 flex flex-row items-center justify-center">
                {project.name}
                {project.desktop && (
                  <span className="mx-1">
                    <FaDesktop />
                  </span>
                )}
                {project.mobile && (
                  <span className="mx-1">
                    <FaMobileAlt />
                  </span>
                )}
              </h2>

              <p className="my-2 font-bold">{project.description}</p>

              <ul className="list-[square] list-inside flex flex-row flex-wrap my-3">
                {project.stacks.map((stack) => (
                  <li key={stack} className="mx-2">
                    {stack}
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-yellow-300 self-center my-2"
              >
                Link do deploy
              </a>
            </div>

            <img
              src={project.image}
              alt={project.name}
              title={project.name}
              className="my-3 rounded-lg shadow-lg shadow-white/50"
            />
          </div>
        ))}
      </div>

      <ContainerTitle title="</Projetos>" />
    </Container>
  );
}
