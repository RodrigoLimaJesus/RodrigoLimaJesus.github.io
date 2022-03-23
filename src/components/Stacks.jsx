import React from 'react';
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiGithub, SiTailwindcss } from 'react-icons/si';

import Container from './Container';
import ContainersTitle from './ContainerTitle';

export default function Stacks() {
  const stacksDetails = [
    { name: 'CSS', Icon: DiCss3, color: 'rgb(79, 180, 214)' },
    { name: 'TAILWIND CSS', Icon: SiTailwindcss, color: 'rgb(79, 180, 214)' },
    { name: 'HTML', Icon: DiHtml5, color: 'rgb(248, 120, 49)' },
    { name: 'JAVASCRIPT', Icon: DiJavascript, color: 'rgb(239, 216, 29)' },
    { name: 'REACT', Icon: DiReact, color: 'rgb(79, 180, 214)' },
    { name: 'REDUX', Icon: SiRedux, color: 'rgb(200, 120, 240)' },
    { name: 'GITHUB', Icon: SiGithub, color: 'white' },
    { name: 'GIT', Icon: DiGit, color: 'orange' },
  ];

  return (
    <Container>
      <ContainersTitle title="<Stacks>" />

      <div className="flex flex-wrap justify-evenly">
        {stacksDetails.map(({ name, Icon, color }) => (
          <span
            key={name}
            style={{ color: color }}
            className="flex flex-col items-center m-2 text-5xl"
          >
            <Icon />
            <span className="text-sm">{name}</span>
          </span>
        ))}
      </div>

      <ContainersTitle title="</Stacks>" />
    </Container>
  );
}
