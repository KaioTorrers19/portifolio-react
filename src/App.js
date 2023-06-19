import React from 'react';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Aside from './componentes/Aside';
import './App.css';
import About from './componentes/About.js';
import Port from './componentes/Port'
import Footer from './componentes/footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Content />
        <Aside />
      </div>
      <About />
      <Port/>
      <Footer/>
    </div>
      
  );
};

export default App;
