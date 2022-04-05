import React from 'react';

import { FiExternalLink } from 'react-icons/fi';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

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

      <Carousel autoPlay infiniteLoop interval={3000} thumbsRef="">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col-reverse items-center my-5 md:flex-row md:mx-7"
          >
            <div className="mr-3 flex flex-col items-center justify-center md:w-2/4 md:text-lg lg:text-xl">
              <p className="my-2 font-bold text-center md:my-0">{project.description}</p>

              <ul className="list-[square] list-inside flex flex-row flex-wrap my-3">
                {project.stacks.map((stack) => (
                  <li key={stack} className="mx-2 marker:text-app-links">
                    {stack}
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center font-bold text-app-links self-center my-2 duration-300 sm:hover:text-app-links-hover sm:text-xl md:text-2xl"
              >
                <span className="mr-3">Link do deploy</span> <FiExternalLink />
              </a>
            </div>

            <div className="w-3/4 mt-3 md:w-2/4 md:mt-0 md:self-start">
              <img
                src={project.image}
                alt={project.name}
                title={project.name}
                className="rounded-lg shadow-lg shadow-white/50 w-full"
              />
              <h2 className="font-bold my-2 flex flex-row items-center justify-center sm:text-xl md:text-2xl">
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
            </div>
          </div>
        ))}
      </Carousel>

      <ContainerTitle title="</Projetos>" />
    </Container>
  );
}
