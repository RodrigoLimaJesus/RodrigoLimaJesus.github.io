import React, { useEffect, useState } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';

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
        <section
          className="
        bg-zinc-300 dark:bg-zinc-900
        flex flex-col
        transition
        "
        >
          <Header changeTheme={changeTheme} />
          <Contact />
        </section>

        <section className="bg-zinc-200 dark:bg-zinc-800">
          <About />
        </section>
      </div>
    </div>
  );
}
