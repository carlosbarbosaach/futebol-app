import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'

const Leagues = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://api-football-standings.azharimm.site/leagues').
            then(res => {
                console.log(res.data);
                setData(res.data.data);
            })
    }, [])

    return <div className='leagues-container'>
        {data.map((data)=> (
            <div key={data.id} className='league-div'>
                <img src={data.logos.light} alt='#'/>
                <h1>{data.name}</h1>
            </div>
        ))}
    </div>;
};

export default Leagues;
