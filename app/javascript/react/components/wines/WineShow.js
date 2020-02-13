import React from 'react';
import LikeTile from './LikeTile';

const WineShow = ({ wine }) => {
  let {
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
      <div>
        <h2>{title}</h2>
        <h4>{variety}</h4>
        <h4>{designation}</h4>
        <h4>{country}</h4>
        <h4>{province}</h4>
        <h4>{region}</h4>
        <h4>{winery}</h4>
        <h4>{score}</h4>
        <h4>{price}</h4>
        <p>{description}</p>
      </div>

      <LikeTile wine={wine}/>
    </>
  )
}

export default WineShow;
