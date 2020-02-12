import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WineTile from './WineTile';


const WineContainer = () => {
  const [wines, setWines] = useState([]);

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
        setWines(response.wines);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const WineTiles = wines.map(wine => {
  let id = wine.id;
  return (
    <Link to={`/wines/${id}`} key={wine.id}>
      <WineTile id={wine.id} wine={wine} />
    </Link>
    );
  });

  /* When your mouse cursor enter the background, the fading won't pause and keep playing */
  $('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
  });



  return(
    <div className="container-fluid main">
      <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner" role="listbox">
          <div className="item active background a"></div>
          <div className="item background b"></div>
          <div className="item background c"></div>
        </div>
      </div>

      <div className="covertext">
        <div className="col-lg-10" style={{float: "none", margin: 0}}>
          <h1 className="title">VINDER</h1>
          <h3 className="subtitle">Your Personal Sommelier</h3>
        </div>
        <div className="col-xs-12 explore">
          <a href="#"><button type="button" className="btn btn-lg explorebtn">PAIR</button></a>
        </div>
      </div>

      <div>
        {WineTiles}
      </div>
    </div>
  )

}

export default WineContainer;
