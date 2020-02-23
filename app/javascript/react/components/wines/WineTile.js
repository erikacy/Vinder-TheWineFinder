import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "black"
  },

  winery: {
    textAlign: "center",
    color: "grey"
  }
});

const WineTile = ({ style, wine }) => {
  return (
    <div className="card-container" style={{ minWidth: "300px", ...style }}>
      <div
        className="card"
        style={{
          height: "400px",
          maxHeight: "400px",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "24px"
        }}
      >
        <img
          style={{ height: "200px", width: "200px" }}
          className="card-img-top"
          src={wine.image}
          alt={wine.title}
        />
        <div>
          <h6 style={{ color: "#616161", marginBottom: "4px" }}>Name</h6>
          <h6 style={{ fontSize: "18px" }}>{wine.title}</h6>
          <h6 style={{ color: "#616161", marginBottom: "4px" }}>Variety</h6>
          <h6 style={{ fontSize: "18px" }}>{wine.variety}</h6>
        </div>
      </div>
    </div>
  );
};

export default WineTile;
