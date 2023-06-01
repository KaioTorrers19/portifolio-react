import React from 'react';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Aside from './componentes/Aside';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Content/>
        <Aside />
      </div>
    </div>
  );
};

export default App;
