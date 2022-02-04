import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loading';

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('eng.1');
  const [selectedYear, setSelectedYear] = useState('2021');

  useEffect(() => {
    setLoading(true);
    axios(
      `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
    )
      .then(res => {
        console.log(res.data.data.standings);
        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  return (
    <div className='standings-container'>
      <div className='select-container'>
        <select
          name='select-league'
          id='select-league'
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value='arg.1'>Argentina Liga Profissional de Futebol</option>
          <option value='aus.1'>Australia A-League</option>
          <option value='bra.1'>Brasileirão Serie A</option>
          <option value='chn.1'>China Super League</option>
          <option value='ned.1'>Liga Holandesa</option>
          <option value='eng.1'>English Premier</option>
          <option value='fra.1'>Liga Francesa</option>
          <option value='ger.1'>Liga Alemã</option>
          <option value='idn.1'>Indonesia League</option>
          <option value='ita.1'>Italia Serie A</option>
          <option value='jpn.1'>Liga Japonesa</option>
          <option value='mys.1'>Malaysian Super Liga</option>
          <option value='mex.1'>Mexico Liga BBVA MX</option>
          <option value='por.1'>Liga Portuguesa</option>
          <option value='rus.1'>Russian Premier League</option>
          <option value='sgp.1'>Singaporen Premier League</option>
          <option value='esp.1'>Espanhã Primeira Divisão</option>
          <option value='tha.1'>Thai Premier League</option>
          <option value='tur.1'>Turkish Super Liga</option>
          <option value='uga.1'>Ugandan Super League</option>
        </select>
        <select
          name='select-year'
          id='select-year'
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value='2011'>2011</option>
          <option value='2012'>2012</option>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
        </select>
      </div>
      <div className='standing-results'>
        {loading ? (
          <Loader type='cylon' color="#00BFFF" height={120} width={120} />
        ) : (
          data.map((data, index) => (
            <div key={data.team.id} className='standing-info-div'>
              <h1>
                <span>
                  {`${index + 1}.`}
                  <img src={data.team.logos[0].href} alt='#'
                    style={{ width: '50px' }} />
                </span>
                {data.team.shortDisplayName}
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Standings;
