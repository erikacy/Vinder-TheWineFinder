import React, { useEffect, useState } from 'react';
import WineShow from './WineShow';

const WineShowContainer = ({ match }) => {
  const [wine, setWine] = useState({});
  const wineId = match.params.id;

  useEffect(() => {
    fetch(`/api/v1/wines/${wineId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setWine(response.wine)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])



  return (
    <>
      <div>
        <WineShow key={wine.id} wine={wine}/>
      </div>
    </>
  )

}

export default WineShowContainer;
