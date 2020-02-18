import React, { useState } from 'react';


const WineTile = ({ wine }) => {

  return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://images.unsplash.com/photo-1554230561-31bdc707b537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-text">{wine.title}</h5>
        </div>
      </div>
  )
}

export default WineTile;
