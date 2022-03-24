import React from 'react';

import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="text-white font-sans bg-app-bg-dark">
      <Header />

      <Apresentation />

      <Stacks />

      <Projects />

      <Footer />
    </div>
  );
}
