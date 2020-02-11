import React from 'react';

const WineTile = ({ wine }) => {
  let { title } = wine;
  return (
    <>
      <h4>{title}</h4>
    </>
  )
}

export default WineTile;
