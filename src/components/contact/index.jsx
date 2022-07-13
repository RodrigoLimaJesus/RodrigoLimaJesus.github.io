import React, { useId } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ProfilePicture from '../../images/euQuadrado.jpeg';

export default function Contact() {
  const links = [
    {
      id: useId(),
      icon: <BsLinkedin />,
      href: 'https://www.linkedin.com/in/rodrigo-lima-jesus/',
    },
    { id: useId(), icon: <BsGithub />, href: 'https://github.com/RodrigoLimaJesus' },
    { id: useId(), icon: <MdEmail />, href: 'mailto:rodrigootavio19@gmail.com' },
  ];

  return (
    <div
      className="
      self-center flex flex-col items-center
      my-5
      text-2xl
      "
    >
      <img
        src={ProfilePicture}
        alt="Minha imagem de perfil e ao fundo alguns produtos para decoração da casa"
        className="
          w-52
          rounded-full
          border-2 border-black dark:border-white
        "
      />

      <div className="my-3 text-center">
        <h2 className="font-bold">Rodrigo Lima</h2>
        <h3
          className="
          text-base
          text-black/75 dark:text-white/75
          "
        >
          Desenvolvedor full stack
        </h3>
      </div>

      <div className="flex">
        {links.map(({ icon, href, id }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
            mx-2
            transition
            hover:text-orange-700 dark:hover:text-blue-400
            "
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
