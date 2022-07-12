import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ProfilePicture from '../../images/euQuadrado.jpeg';

export default function Contact() {
  const links = [
    {
      icon: <BsLinkedin />,
      href: 'https://www.linkedin.com/in/rodrigo-lima-jesus/',
    },
    { icon: <BsGithub />, href: 'https://github.com/RodrigoLimaJesus' },
    { icon: <MdEmail />, href: 'mailto:rodrigootavio19@gmail.com' },
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

      <h2 className="font-bold my-3">Rodrigo Lima</h2>

      <div className="flex">
        {links.map(({ icon, href }) => (
          <a
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
