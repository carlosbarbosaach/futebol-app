import React, { useState } from 'react';
import '../App.css'
import Leagues from './Leagues';
import Standings from './Standings';

const Content = () => {

  const [active, setactive] = useState(true);

  return <div className='content-container'>
    <div className='tabs'>
      <div className='tab-leagues' onClick={() => setactive(true)}>
        <h2 style={{ color: active ? '#FF1F1F' : null }}>Ligas</h2>
      </div>
      <div className='tab-standings' onClick={() => setactive(false)}>
        <h2 style={{ color: !active ? '#FF1F1F' : null }}>Classificação</h2>
      </div>
    </div>

    {active ? <Leagues /> : <Standings />}
  </div>;
};

export default Content;
