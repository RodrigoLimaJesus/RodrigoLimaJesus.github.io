import React from 'react';
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiGithub } from 'react-icons/si';

export default function Stacks() {
  const stacksFrontend = [
    { name: 'CSS', Icon: DiCss3, color: 'blue' },
    { name: 'HTML', Icon: DiHtml5, color: 'orange' },
    { name: 'JAVASCRIPT', Icon: DiJavascript, color: 'yellow' },
    { name: 'REDUX', Icon: SiRedux, color: 'purple' },
    { name: 'REACT', Icon: DiReact, color: 'blue' },
    { name: 'GITHUB', Icon: SiGithub, color: '' },
    { name: 'GIT', Icon: DiGit, color: 'orange' },
  ];

  return (
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
  );
}
