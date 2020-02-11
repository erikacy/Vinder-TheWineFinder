import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WineTile from './WineTile';


const WineContainer = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch('/api/v1/wines.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        setWines(response);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const WineTiles = wines.map(wine => {
  let id = wine.id;
  return (
    <Link to={`/wines/${id}`} key={wine.id}>
      <WineTile id={wine.id} wine={wine} />
    </Link>
    );
  });



  return(
    <>
    <div>
      {WineTiles}
    </div>
    </>
  )
}

export default WineContainer;
