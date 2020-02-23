import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import WineTile from "../wines/WineTile";
import humps from "humps";

import Sommelier from "../../../../assets/images/sommelier.png";

const LikeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [likeWines, setLikeWines] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    fetch("/api/v1/user_wines.json")
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
        setLikeWines(response.wines);
        setIsLoading(false);
        if (camelized !== null) {
          setListTitle(
            `${camelized.firstName} ${camelized.lastName}'s Personal Wine List`
          );
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error(`Error in fetch: ${error.message}`);
      });
  }, []);

  const WineTiles = likeWines.map(wine => {
    let id = wine.id;
    return (
      <div className="col-xl-4" style={{ marginBottom: "48px" }}>
        <Link
          className="wine-tile-link"
          style={{ marginRight: "0 !important" }}
          to={`/wines/${id}`}
          target="_blank"
          key={wine.id}
        >
          <WineTile id={wine.id} wine={wine} />
        </Link>
      </div>
    );
  });

  if (isLoading) {
    return (
      <div
        className="container-fluid main"
        style={{
          display: "flex",
          width: "100vw",
          flexDirection: "column",
          padding: "48px"
        }}
      >
        <h2 style={{ marginBottom: "48px" }}>
          Loading Your Personal Wine List ...
        </h2>
      </div>
    );
  }

  if (likeWines && likeWines.length === 0) {
    return (
      <div
        className="container-fluid main"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          flexDirection: "column",
          padding: "48px"
        }}
      >
        <img style={{ padding: "24px", height: "500px" }} src={Sommelier} />
        <h2>Your personal wine list is empty!</h2>
        <a href="/search" style={{ marginTop: "12px" }}>
          <button className="primary-button is-circle">Find Wines</button>
        </a>
      </div>
    );
  }

  return (
    <div
      className="container-fluid main"
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        padding: "48px"
      }}
    >
      <h2 style={{ marginBottom: "48px" }}>{listTitle}</h2>
      <div className="container" style={{ width: "100%" }}>
        <div className="row">{WineTiles}</div>
      </div>
    </div>
  );
};

export default LikeList;
