import React, { useId } from 'react';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import MyFilmsImg from '../../images/myfilms.png';
import QuantoEstaImg from '../../images/quanto-esta.png';
import Container from '../wrappers/Container';
import Title from '../wrappers/Title';

export default function Projects() {
  const projects = [
    {
      id: useId(),
      name: 'MyFilms',
      mobile: true,
      desktop: true,
      description:
        'Uma aplicação desenvolvida com inspiração na netflix para treino de habilidades front-end, como estilização, consumo de Api externa e gerenciamento de estados',
      link: 'https://myfilms.rodrigolimajesus.vercel.app/',
      image: MyFilmsImg,
      stacks: [
        { id: useId(), name: 'Reactjs' },
        { id: useId(), name: 'TailwinCss' },
        { id: useId(), name: 'ContextApi' },
      ],
    },
    {
      id: useId(),
      name: 'Quanto está',
      mobile: true,
      desktop: true,
      description:
        'Um projeto pessoal feito para você que quer estar por dentro da cotação de algumas das principais moedas do mercado financeiro.',
      link: 'https://quanto-esta.rodrigolimajesus.vercel.app/',
      image: QuantoEstaImg,
      stacks: [
        { id: useId(), name: 'Typescript' },
        { id: useId(), name: 'Reactjs' },
        { id: useId(), name: 'ContextApi' },
        { id: useId(), name: 'TailwindCss' },
      ],
    },
  ];

  return (
    <Container>
      <Title>Meus projetos</Title>

      <div className="my-4 flex flex-wrap justify-around">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
            border border-black dark:border-white
            rounded-xl
            my-3 md:px-2 lg:px-4
            w-[80%] sm:w-[70%] md:w-[48%] lg:w-[45%]
            "
          >
            <div className="flex flex-col justify-center items-center mt-2">
              <img
                src={project.image}
                alt={project.name}
                className="
                w-72 sm:w-80 sm:h-60
                rounded-lg
                shadow-md shadow-black dark:shadow-white
                "
              />

              <div className="flex justify-center items-center my-2">
                <span className="mx-1 font-bold text-xl">{project.name}</span>
                <span className="mx-1">{project.mobile && <FaMobileAlt />}</span>
                <span className="mx-1">{project.desktop && <FaDesktop />}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="px-3">{project.description}</p>

              <ul
                className="
                list-[square] list-inside
                flex flex-wrap justify-evenly
                my-3
                "
              >
                {project.stacks.map((stack) => (
                  <li
                    key={stack.id}
                    className="mx-1 marker:text-sky-800 dark:marker:text-orange-400"
                  >
                    {stack.name}
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                text-sky-800 dark:text-orange-400
                flex items-center justify-center
                transition duration-200
                hover:text-orange-700 dark:hover:text-blue-400
                hover:underline
                "
              >
                Veja o site rodando
                <HiExternalLink className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
