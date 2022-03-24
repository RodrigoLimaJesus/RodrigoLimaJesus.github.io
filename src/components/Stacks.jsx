import React from 'react';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiMysql,
  DiHeroku,
  DiDocker,
} from 'react-icons/di';
import {
  SiRedux,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import Container from './Container';
import ContainersTitle from './ContainerTitle';

export default function Stacks() {
  const stacksDetails = [
    { name: 'CSS', icon: <DiCss3 />, color: 'rgb(79, 180, 214)' },
    {
      name: 'TAILWINDCSS',
      icon: <SiTailwindcss />,
      color: 'rgb(79, 180, 214)',
    },
    { name: 'HTML', icon: <DiHtml5 />, color: 'rgb(248, 120, 49)' },
    { name: 'JAVASCRIPT', icon: <DiJavascript />, color: 'rgb(239, 216, 29)' },
    { name: 'REACT', icon: <DiReact />, color: 'rgb(79, 180, 214)' },
    { name: 'NODE JS', icon: <SiNodedotjs />, color: 'rgb(139, 190, 60)' },
    { name: 'TYPESCRIPT', icon: <SiTypescript />, color: 'rgb(79, 180, 214)' },
    { name: 'MYSQL', icon: <DiMysql />, color: 'rgb(79, 180, 214)' },
    { name: 'DOCKER', icon: <DiDocker />, color: 'rgb(79, 180, 214)' },
    { name: 'REDUX', icon: <SiRedux />, color: 'rgb(200, 120, 240)' },
    { name: 'GITHUB', icon: <SiGithub />, color: 'rgb(255, 255, 255)' },
    { name: 'GIT', icon: <DiGit />, color: 'rgb(248, 120, 49)' },
    { name: 'HEROKU', icon: <DiHeroku />, color: 'rgb(200, 120, 240)' },
    { name: 'VERCEL', icon: <SiVercel />, color: 'rgb(255, 255, 255)' },
  ];

  return (
    <Container>
      <ContainersTitle title="<Stacks>" />

      <div className="flex flex-wrap justify-evenly sm:my-2 md:my-3 lg:my-4">
        {stacksDetails.map(({ name, icon, color }) => (
          <span
            key={name}
            style={{ color: color }}
            className="flex flex-col items-center m-2 text-5xl sm:text-6xl lg:text-7xl"
          >
            {icon}
            <span className="text-sm">{name}</span>
          </span>
        ))}
      </div>

      <ContainersTitle title="</Stacks>" />
    </Container>
  );
}
