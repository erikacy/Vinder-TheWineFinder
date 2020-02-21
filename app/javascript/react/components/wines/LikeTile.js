import React, { useState } from 'react';

const LikeTile = ({wine}) => {

  const [likes, setLikes] = useState(null)
  let wineId = wine.id
  let likeMessage

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
      .catch(error => console.error(`Error in fetch: ${error.message}`)
    );
  };

  const handleLike = event => {
    event.preventDefault()
    addLike()
  }

  if (likes === null) {
    likeMessage = ""
  } else {
    likeMessage = "Oenophiles have liked"
  }



  return(
    <>
      <button onClick={handleLike} type='submit' className='btn btn-primary btn-lg' value='Like'> Like
      </button>{likes} {likeMessage}
    </>
  )

}

export default LikeTile
