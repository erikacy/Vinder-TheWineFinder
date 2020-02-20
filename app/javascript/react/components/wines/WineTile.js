import React, { useState } from 'react';


const WineTile = ({ wine }) => {

  return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={wine.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-text">{wine.title}</h5>
        </div>
      </div>
  )
}

export default WineTile;
