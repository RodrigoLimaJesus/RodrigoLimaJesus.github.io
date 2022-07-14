import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function NavBar({ isMenuVisible, setIsMenuVisible }) {
  const sectionIds = [
    { id: 'about', name: 'Sobre Mim' },
    { id: 'stacks', name: 'Minhas tecnologias' },
    { id: 'projects', name: 'Meus projetos' },
  ];

  return (
    <>
      <button
        className={`
        z-10
        bg-black/50 dark:bg-white/60
        fixed top-0 left-0
        h-screen w-screen
        ${isMenuVisible ? 'visible' : 'hidden'}
        sm:hidden
        `}
        onClick={() => setIsMenuVisible(false)}
      />

      <div
        className={`
        fixed top-0 left-0 sm:static
        overflow-hidden
        bg-zinc-300 dark:bg-zinc-900 sm:bg-inherit dark:sm:bg-inherit
        transition-all duration-500 sm:transition-none
        h-screen ${isMenuVisible ? 'w-[60vw]' : 'w-0'} sm:h-fit sm:w-fit
        z-20 sm:z-0
        flex flex-col
        `}
      >
        <div className="flex justify-between items-center text-2xl m-4 sm:hidden">
          <h1 className="font-bold text-sky-800 dark:text-orange-400">Rodrigo Lima</h1>

          <button onClick={() => setIsMenuVisible(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <nav className="m-4 flex flex-col sm:flex-row">
          {sectionIds.map(({ name, id }) => (
            <button
              key={name}
              onClick={() => {
                setIsMenuVisible(false);
                window.document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
              }}
              className="
              my-4 sm:my-0 sm:mx-2
              text-xl sm:text-base md:text-xl
              transition
              hover:text-orange-700 dark:hover:text-blue-400
              "
            >
              {name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
