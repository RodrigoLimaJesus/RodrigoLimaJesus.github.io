import React, { useState } from 'react';
import Header from './components/header';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === '' ? 'dark' : ''));
  };

  return (
    <div className={`${theme}`}>
      <section>
        <Header changeTheme={changeTheme} />
      </section>
    </div>
  );
}
