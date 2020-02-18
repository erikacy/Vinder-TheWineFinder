import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WineTile from '../wines/WineTile';
import humps from 'humps';

const LikeList = () => {
  const [likeWines, setLikeWines] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [listTitle, setListTitle] = useState("")

  useEffect(() => {
    fetch('/api/v1/user_wines.json')
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
        let camelized = humps.camelizeKeys(response.wines[0].users[0].current_user)
        setCurrentUser(camelized)
        setLikeWines(response.wines);
        if (camelized !== null) {
          setListTitle(`${camelized.firstName} ${camelized.lastName}'s personal like list'`)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const WineTiles = likeWines.map(wine => {
  let id = wine.id;
  return (
    <Link to={`/wines/${id}`} target="_blank" key={wine.id}>
      <WineTile id={wine.id} wine={wine} />
    </Link>
    );
  });

  return (
    <>
      <h2>{listTitle}</h2>
      <div className="card-group">
        {WineTiles}
      </div>
    </>
  )
}

export default LikeList
