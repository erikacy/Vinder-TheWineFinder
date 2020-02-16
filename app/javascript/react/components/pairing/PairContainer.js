import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PairContainer = () => {
  const [pairWines, setpairWines] = useState([])

  const foodPair = () => {

  }

  return (
    <div>
      Hi from food pairing!
      <button id="pair" onClick={foodPair} value="pair">Start Pairing!</button>
    </div>
  )


}

export default PairContainer
