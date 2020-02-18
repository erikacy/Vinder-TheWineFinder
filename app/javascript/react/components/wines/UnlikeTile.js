import React, { useState } from 'react';

const UnlikeTile = (props) => {
  const [className, setClassName] = useState("")
  const [currentUserId, setCurrentUserId] = useState(null)
  let wineId = props.wine.id
  
  const removeLike = () => {
    fetch(`/api/v1/wines/${wineId}/likes`, {
      credentials: 'same-origin',
      method: 'DELETE',
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
        debugger
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const clickUnlike = event => {
    event.preventDefault()
    removeLike()
  }


  // if (props.wine.users[0].current_user.id !== null) {
  //   props.wine.likes.forEach(like => {
  //     if (like.user_id === currentUserId){
  //       setClassName("display")
  //     }
  //   })
  // }


  return (
    <button className={className} onClick={clickUnlike} type='submit'
      value='UnLike'>UnLike
    </button>
  )
}

export default UnlikeTile;
