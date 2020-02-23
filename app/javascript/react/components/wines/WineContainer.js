import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import WineTile from "./WineTile";
import humps from "humps";

import Sommelier from "../../../../assets/images/sommelier.png";

import Analytics1 from "../../../../assets/images/analytics.png";
import Analytics2 from "../../../../assets/images/analytics2.png";


const WineContainer = () => {
  const [wines, setWines] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [greeting, setGreeting] = useState("Loading Recommended Wines ...");

  useEffect(() => {
    fetch("/api/v1/wines.json")
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
        let camelized = humps.camelizeKeys(
          response.wines[0].users[0].current_user
        );
        setCurrentUser(camelized);
        setWines(response.wines);
        if (camelized !== null) {
          setGreeting(`Curated Only for ${camelized.firstName}`);
        } else {
          setGreeting("Taste the world's finest");
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const wineTiles = wines.map(wine => {
    let id = wine.id;
    return (
      <Link
        className="wine-tile-link"
        to={`/wines/${id}`}
        target="_blank"
        key={wine.id}
      >
        <WineTile id={wine.id} style={{ marginRight: "48px" }} wine={wine} />
      </Link>
    );
  });

  return (
    <>
      <div className="container-fluid main">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px",
            borderBottom: "1px solid #e0e0e0"
          }}
        >
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "500px"
            }}
          >
            <img style={{ padding: "24px", height: "500px" }} src={Sommelier} />
          </div>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "500px"
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>
              Meet Your Personal Sommelier!
            </h2>

            <div style={{ textAlign: "left" }}>
              <h4 style={{ fontWeight: "400" }}>Discover new wines</h4>
              <h4 style={{ fontWeight: "400" }}>
                Receive smart recommendations
              </h4>
              <h4 style={{ fontWeight: "400" }}>
                Generate wine pairings on demand
              </h4>
            </div>
            <a href="/search" style={{ marginTop: "12px" }}>
              <button type="button" className="primary-button is-circle">
                Start Pairing
              </button>
            </a>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            backgroundColor: "white",
            width: "100vw",
            minHeight: "400px",
            padding: "24px 0"
          }}
        >
          <h2 style={{ marginBottom: "12px", padding: "0 0 0 48px" }}>
            {greeting}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
              padding: "12px 0 12px 48px"
            }}
          >
            {wineTiles}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "400px",
            backgroundColor: "#b0bec5"
          }}
        >
          <div style={{ width: "50%", padding: "48px" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{ maxWidth: "300px" }} src={Analytics2} />
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h2>Customized Recommendations</h2>
            <p style={{ fontSize: "20px" }}>
              We generate the best possible
              recommendations for you and what you enjoy.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "400px",
            backgroundColor: "#eeeeee"
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              padding: "24px"
            }}
          >
            <h2>Professional Wine Pairings</h2>
            <p style={{ fontSize: "20px" }}>
              Pair any wine with a taste, food, winery, and more.
            </p>
          </div>
          <div style={{ width: "50%", padding: "48px" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{ maxWidth: "300px" }} src={Analytics1} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(39, 67, 82)",
            flexDirection: "column",
            textAlign: "center",
            padding: "24px",
            color: "white"
          }}
        >
          <h2 style={{ marginBottom: "16px" }}>Explore Vinder today!</h2>
          <a href="/search">
            <button className="primary-button is-circle">Get Started</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default WineContainer;
