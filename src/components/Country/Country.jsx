import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
   const {name, flags, population, area, cca3} = country;
   
   const [visited, setVisited] = useState(false);
   
    const handleVisited = () => {
        setVisited(!visited);
    }

    console.log(handleVisitedCountry);

   return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited ? 'Purple' : 'Blue'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Will Go'}</button>
            {visited && 'I have visited this country.'}
        </div>
    );
};

export default Country;