import React from "react";
import LikeTile from "./LikeTile";
import { StyleSheet, css } from "aphrodite";
import { FaDollarSign, FaPercentage } from "react-icons/fa";

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
  } = wine;

  return (
    <>
      <div className="container-fluid main" style={{ padding: "48px" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card" style={{ padding: "48px" }}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "48px"
                  }}
                >
                  <img
                    style={{
                      height: "300px",
                      width: "300px"
                    }}
                    src={image}
                    alt={title}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                        Score
                      </h6>
                      <h6
                        style={{
                          fontSize: "40px",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        {score}
                        <FaPercentage />
                      </h6>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                        Price
                      </h6>
                      <h6
                        style={{
                          fontSize: "40px",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <FaDollarSign />
                        {price}
                      </h6>
                    </div>
                  </div>
                  <LikeTile wine={wine} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                    Name
                  </h6>
                  <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {title}
                  </h6>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        maxWidth: "400px"
                      }}
                    >
                      <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                        Variety
                      </h6>
                      <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                        {wine.variety}
                      </h6>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        maxWidth: "400px"
                      }}
                    >
                      <h6 style={{ color: "#616161", width: "25%" }}>Winery</h6>
                      <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                        {winery}
                      </h6>
                    </div>
                  </div>
                  <h6 style={{ color: "#616161", width: "25%" }}>Color</h6>
                  <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {color}
                  </h6>
                  <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                    Designation
                  </h6>
                  <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {wine.designation}
                  </h6>
                  <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                    Location
                  </h6>
                  <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {country}, {province}, {region}
                  </h6>
                  <h6 style={{ color: "#616161", marginBottom: "4px" }}>
                    Description
                  </h6>
                  <h6 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    {description}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineShow;
