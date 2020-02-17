import React from 'react';
import LikeTile from './LikeTile';

const WineShow = ({ wine }) => {

  let {
    id,
    country,
    description,
    designation,
    score,
    price,
    province,
    region,
    title,
    variety,
    winery
  } = wine
  return (
    <>
    <div className="containter">
        <ul className="list-group list-group-flush">
          <h2 className="list-group-item">Title: {title}</h2>
          <h4 className="list-group-item">Variety: {variety}</h4>
          <h4 className="list-group-item">Vineyard Designation: {designation}</h4>
          <h4 className="list-group-item">{country}</h4>
          <h4 className="list-group-item">{province}</h4>
          <h4 className="list-group-item">{region}</h4>
          <h4 className="list-group-item">Winery: {winery}</h4>
          <h4 className="list-group-item">Wine Score: {score}</h4>
          <h4 className="list-group-item">Price: {price}</h4>
          <h4 className="list-group-item">{description}</h4>
        </ul>

      <LikeTile wine={wine}/>
    
    </div>
    </>
  )
}

export default WineShow;
