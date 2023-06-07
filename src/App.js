import React from 'react';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Aside from './componentes/Aside';
import './App.css';
import About from './componentes/About.js';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Content />
        <Aside />
      </div>
      <About />
    </div>
  );
};

export default App;
