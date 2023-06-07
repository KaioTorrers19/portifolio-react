import React from 'react';
import dev from '../img/dev.png'
import './css/Aside.css';
const Aside = () => {
  return (
    <aside className="aside-section">
      <img src={dev} alt="dev" />
    </aside>
  );
};

export default Aside;