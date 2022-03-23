import React from 'react';

import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Stacks from './components/Stacks';
import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <Header />

      <Apresentation />

      <Stacks />

      <Projects />

      <footer className="footer-home">
        <span>Feito com React, CSS e dedicação.</span>
        <span>Rodrigo Lima &copy; 2022</span>
      </footer>
    </div>
  );
}
