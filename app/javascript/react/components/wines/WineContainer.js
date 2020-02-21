import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import WineTile from './WineTile';
import humps from 'humps';

const styles = StyleSheet.create({
  title: {
    color: '#240032'
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  marginAuto: {
    marginTop: 50,
    marginBottom: 50
  },
  link: {
    textDecoration: "none"
  }
})

const WineContainer = () => {
  const [wines, setWines] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [greeting, setGreeting] = useState("Taste the world's finest...")

  useEffect(() => {
    fetch('/api/v1/wines.json')
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
      .then(response => {
        let camelized = humps.camelizeKeys(response.wines[0].users[0].current_user)
        setCurrentUser(camelized)
        setWines(response.wines);
        if (camelized !== null) {
          setGreeting(`Curated Only for ${camelized.firstName}`)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const wineTiles = wines.map(wine => {
  let id = wine.id;
  return (
    <Link to={`/wines/${id}`} target="_blank" key={wine.id}>
      <WineTile id={wine.id} wine={wine} />
    </Link>
    );
  });

  return(
    <>
    <div className="container-fluid main">
      <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner" role="listbox">
          <div className="item active background a"></div>
        </div>
      </div>

      <div className="covertext">
        <div className="col-lg-10" style={{float: "none", margin: 0}}>
          <h1 className="title">VINDER</h1>
          <h3 className="subtitle">Your Personal Sommelier</h3>
        </div>
        <div className="col-xs-12 explore">
          <a href="/search"><button type="button" className="btn btn-lg explorebtn">Start Pairing!</button></a>
        </div>
      </div>
    </div>

    <div>
      <h2 className = {css(styles.center, styles.marginAuto)}>{greeting}</h2>
      <div className={`card-group ${css(styles.center)}`}>
        {wineTiles}
      </div>
    </div>
    </>
  )

}

export default WineContainer;
