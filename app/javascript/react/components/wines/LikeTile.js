import React, { useState } from 'react';

const LikeTile = (props) => {

  const [likes, setLikes] = useState(0)
  let wineId = props.wine.id

  const addLike = () => {
    fetch(`/api/v1/wines/${wineId}/likes`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
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
      .then(body => {
        setLikes(body.likes.length)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const handleLike = event => {
    event.preventDefault()
    addLike()
  }


  return(
    <div className='button-group'>
      <button onClick={handleLike} type='submit' className='button' value='Like'> Like
      </button>{likes}
    </div>
  )

}

export default LikeTile
