import React from 'react';
import LikeTile from './LikeTile';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 120,
    marginLeft: 50,
    marginRight: 50
  },
  wine_picture: {
    width: '25%',
    borderRadius: 20,
  },
  information: {
    display: 'flex'
  },
  detail: {
    marginTop: 30,
    margin: 25
  },
  black: {
    color: 'black'
  },
  wine: {
    marginTop: 50
  }
})

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
      <div className={`jumbotron ${css(styles.wrapper)}`}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-8 ${css(styles.information)}`}>
              <img className={`card-img-top ${css(styles.wine_picture)}`} src={image} alt="Card image cap" />
              <div className={css(styles.detail)}>
                <h1 className="lead" style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>{title}</h1>
                <h3 className="lead" style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Varietal: {variety}</h3>
                <h4 className="lead" style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{designation}</h4>
                <h4 className="lead" style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{`${country} ${province} ${region}`}</h4>
                <h5 className="lead" style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{description}</h5>
              </div>
            </div>
            <div className={`col-sm-4 ${css(styles.wine)}`}>
              <h5 className="list-group-item">Winery: {winery}</h5>
              <h5 className="list-group-item">Color: {color}</h5>
              <h5 className="list-group-item">Wine Score: {score}</h5>
              <h5 className="list-group-item">Price: {price}</h5>
            </div>
          </div>
        </div>
      </div>
      <LikeTile wine={wine}/>
    </>
  )
}

export default WineShow;
