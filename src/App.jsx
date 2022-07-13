import React, { useEffect, useState } from 'react';
import About from './components/about';
import Contact from './components/contact';
import GoPageTopBtn from './components/GoPageTopBtn';
import Header from './components/header';
import Projects from './components/projects';
import Stacks from './components/stacks';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const loadTheme = localStorage.theme || 'dark';
    setTheme(loadTheme);
  }, []);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        localStorage.theme = 'dark';
        return 'dark';
      }

      localStorage.theme = 'light';
      return 'light';
    });
  };

  return (
    <div className={theme}>
      <div className="text-black dark:text-white">
        <GoPageTopBtn />
        <section
          id="page-top"
          className="
        bg-zinc-300 dark:bg-zinc-900
          flex flex-col
          transition
          "
        >
          <Header changeTheme={changeTheme} />
          <Contact />
        </section>

        <section id="about" className="bg-zinc-200 dark:bg-zinc-800 transition">
          <About />
        </section>

        <section id="stacks" className="bg-zinc-300 dark:bg-zinc-900 transition">
          <Stacks />
        </section>

        <section id="projects" className="bg-zinc-200 dark:bg-zinc-800 transition">
          <Projects />
        </section>
      </div>
    </div>
  );
}
