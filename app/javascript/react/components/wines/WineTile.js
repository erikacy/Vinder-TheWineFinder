import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: 'black'
  },

  winery: {
    textAlign: "center",
    color: 'grey'
  }
})

const WineTile = ({ wine }) => {

  return (
      <div className="card" style={{width: "18rem", margin: 10}}>
        <img className="card-img-top" src={wine.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className={`card-text ${css(styles.title)}`}>{wine.title}</h5>
          <h5 className={`card-text ${css(styles.winery)}`}>{wine.variety}</h5>
        </div>
      </div>
  )
}

export default WineTile;
