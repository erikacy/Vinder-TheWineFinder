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
    winery,
    color,
    image,
    likes
  } = wine

  return (
    <>
    <div className="jumbotron">
        <img src={image} className="img-thumbnail"></img>
        <h1 className='display-4'>{title}</h1>
          <h3 className="lead">Varietal: {variety}</h3>
          <h4 className="lead">{designation}</h4>
          <h4 className="lead">{country}</h4>
          <h4 className="lead">{province}</h4>
          <h4 className="lead">{region}</h4>
          <hr className="my-4"/>

          <h4 className="list-group-item">Winery: {winery}</h4>
          <h4 className="list-group-item">Color: {color}</h4>
          <h4 className="list-group-item">Wine Score: {score}</h4>
          <h4 className="list-group-item">Price: {price}</h4>
          <h4 className="list-group-item">Tasting Notes: {description}</h4>
    </div>
      <LikeTile wine={wine}/>
    </>
  )
}

export default WineShow;
