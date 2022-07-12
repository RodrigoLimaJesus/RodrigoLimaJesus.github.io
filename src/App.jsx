import React, { useState } from 'react';
import Contact from './components/contact';
import Header from './components/header';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === '' ? 'dark' : ''));
  };

  return (
    <div className={theme}>
      <div className="text-black dark:text-white">
        <section
          className="
        bg-zinc-200 dark:bg-zinc-900
        flex flex-col
        transition
        "
        >
          <Header changeTheme={changeTheme} />
          <Contact />
        </section>
      </div>
    </div>
  );
}
