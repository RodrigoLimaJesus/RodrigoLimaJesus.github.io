import React, { useId } from 'react';
import * as Si from 'react-icons/si';
import Container from '../wrappers/Container';
import Title from '../wrappers/Title';

export default function Stacks() {
  const stacks = [
    {
      id: useId(),
      icon: <Si.SiJavascript />,
      name: 'Javscript',
      color: 'dark:text-yellow-400',
    },
    {
      id: useId(),
      icon: <Si.SiReact />,
      name: 'Reactjs',
      color: 'text-cyan-800 dark:text-cyan-400',
    },
    {
      id: useId(),
      icon: <Si.SiTypescript />,
      name: 'Typescript',
      color: 'text-cyan-800 dark:text-blue-400',
    },
    { id: useId(), icon: <Si.SiNextdotjs />, name: 'Nextjs', color: '' },
    {
      id: useId(),
      icon: <Si.SiRedux />,
      name: 'Redux',
      color: 'text-purple-800 dark:text-purple-400',
    },
    {
      id: useId(),
      icon: <Si.SiCss3 />,
      name: 'Css',
      color: 'text-cyan-800 dark:text-cyan-400',
    },
    {
      id: useId(),
      icon: <Si.SiTailwindcss />,
      name: 'TailwindCss',
      color: 'text-cyan-800 dark:text-cyan-400',
    },
    {
      id: useId(),
      icon: <Si.SiStyledcomponents />,
      name: 'Styled Components',
      color: 'text-purple-800 dark:text-purple-400',
    },
    { id: useId(), icon: <Si.SiCypress />, name: 'Cypress', color: '' },
    {
      id: useId(),
      icon: <Si.SiHtml5 />,
      name: 'Html5',
      color: 'text-red-800 dark:text-red-400',
    },
    {
      id: useId(),
      icon: <Si.SiNodedotjs />,
      name: 'Nodejs',
      color: 'text-green-800 dark:text-green-400',
    },
    {
      id: useId(),
      icon: <Si.SiMocha />,
      name: 'Mocha',
      color: 'text-orange-800 dark:text-orange-400',
    },
    {
      id: useId(),
      icon: <Si.SiMysql />,
      name: 'Mysql',
      color: 'text-cyan-800 dark:text-cyan-400',
    },
    {
      id: useId(),
      icon: <Si.SiMongodb />,
      name: 'Mongodb',
      color: 'text-green-800 dark:text-green-400',
    },
    {
      id: useId(),
      icon: <Si.SiSequelize />,
      name: 'Sequelize',
      color: 'text-blue-800 dark:text-blue-400',
    },
    {
      id: useId(),
      icon: <Si.SiDocker />,
      name: 'Docker',
      color: 'text-blue-800 dark:text-blue-400',
    },
    {
      id: useId(),
      icon: <Si.SiGit />,
      name: 'Git',
      color: 'text-red-800 dark:text-red-400',
    },
    { id: useId(), icon: <Si.SiGithub />, name: 'Github', color: '' },
    {
      id: useId(),
      icon: <Si.SiTrello />,
      name: 'Trello',
      color: 'text-blue-800 dark:text-blue-400',
    },
    { id: useId(), icon: <Si.SiVercel />, name: 'Vercel', color: '' },
  ];

  return (
    <Container>
      <Title>Minhas tecnologias</Title>

      <div className="flex flex-wrap justify-around my-5">
        {stacks.map(({ id, icon, name, color }) => (
          <div
            key={id}
            className={`
            flex flex-col items-center
            mx-2 my-3 md:m-4
            transition-all
            text-3xl sm:text-4xl sm:hover:text-6xl md:text-5xl md:hover:text-7xl
            ${color}
            `}
          >
            {icon}
            <span className="text-base">{name}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
