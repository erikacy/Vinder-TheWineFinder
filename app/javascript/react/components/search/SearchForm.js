import React, { useState } from "react";
import { Link } from "react-router-dom";
import WineTile from "../wines/WineTile";

let scrollRef;
let tags;

const countries = [
  "France",
  "Italy",
  "US",
  "Spain",
  "Portugal",
  "Chile",
  "Argentina",
  "Australia",
  "Austria"
];

const regions = [
  "Napa Valley",
  "Bordeaux",
  "Rioja",
  "Alsace",
  "Toscana",
  "Bourgogne",
  "Rhône Valley"
];

const pairings = [
  "seafood",
  "steak",
  "chicken",
  "fish",
  "dessert",
  "sweet",
  "spicy",
  "light",
  "dry",
  "tannic",
  "fruity"
];

const varietals = [
  "Cabernet Franc",
  "Cabernet Sauvignon",
  "Chardonnay",
  "Champagne",
  "Pinot Gris",
  "Pinot Noir",
  "Red Blend",
  "Sparkling",
  "Rosé",
  "Merlot",
  "Malbec",
  "Riesling",
  "Syrah",
  "Shiraz",
  "Sauvignon Blanc",
  "White Blend",
  "Zinfandel"
];

const tagsData = {
  region: regions,
  description: pairings,
  variety: varietals
};

const setTagsToDisplay = (event, setTags) => {
  const type = event.target.name;
  setTags({
    type,
    list: tagsData[type]
  });
};

const SearchForm = () => {
  const defaultSearch = {
    country: "",
    region: "",
    description: "",
    variety: "",
    title: "",
    winery: ""
  };
  const [searchWines, setSearchWines] = useState([]);
  const [searchString, setSearchString] = useState(defaultSearch);
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState({});

  const handleSearchChange = event => {
    setSearchString(event.currentTarget.value);
  };

  const onFormChange = event => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    setSearchString({
      ...searchString,
      [key]: value
    });
  };

  const clearForm = () => {
    setSearchString(defaultSearch);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const body = JSON.stringify({
      search_strings: searchString
    });
    setSearchWines([]);
    setMessage("Searching for Wine Pairings ...");
    setTimeout(() => {
      document
        .querySelector(".container-fluid.main")
        .scrollTo(0, scrollRef.scrollHeight);
    }, 100);
    fetch("/api/v1/search.json", {
      method: "POST",
      body: body,
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(body => {
        if (body.wines.length === 0) {
          setMessage("No Wine Pairing Matched At the Moment");
        } else {
          setSearchWines(body.wines);
          setMessage("Cheers!");
          clearForm();
        }
      });
  };

  const WineTiles = searchWines.map(wine => {
    let id = wine.id;
    return (
      <div className="col-lg-4" style={{ marginBottom: "48px" }}>
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

  return (
    <>
      <div className="container-fluid main">
        <div style={{ padding: "48px 0" }}>
          <form id="contact" onSubmit={handleSubmit}>
            <h3>Search for Wine Pairings</h3>
            <fieldset className="fieldset-input first-input">
              <label>Country</label>
              <div class="dropdown" style={{ cursor: "pointer" }}>
                <button
                  class="secondary-button dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {searchString.country || "Choose Country"}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {countries.map(country => {
                    return (
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={() =>
                          onFormChange({
                            currentTarget: {
                              name: "country",
                              value: country
                            }
                          })
                        }
                      >
                        {country}
                      </a>
                    );
                  })}
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset-input">
              <label>Region</label>
              <input
                type="text"
                name="region"
                value={searchString.region}
                onClick={event => setTagsToDisplay(event, setTags)}
                onChange={onFormChange}
                placeholder="Bordeaux, Napa"
              />
            </fieldset>
            <div
              style={{
                margin: "auto",
                width: "80%",
                marginTop: "12px",
                marginBottom: "12px"
              }}
            >
              {tags.type === "region" &&
                tags.list &&
                tags.list.map(tag => {
                  return (
                    <span
                      style={{
                        marginRight: "12px",
                        marginBottom: "12px",
                        padding: "12px",
                        backgroundColor: "rgb(171 ,43 ,47)",
                        color: "white"
                      }}
                      onClick={() =>
                        onFormChange({
                          currentTarget: {
                            name: "region",
                            value: tag
                          }
                        })
                      }
                      className="badge badge-pill badge-light"
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>
            <fieldset className="fieldset-input">
              <label>Taste|Food Pairing</label>
              <input
                type="text"
                name="description"
                value={searchString.description}
                onChange={onFormChange}
                onClick={event => setTagsToDisplay(event, setTags)}
                placeholder="Seafood, sweet, tannic"
              />
            </fieldset>
            <div
              style={{
                margin: "auto",
                width: "80%",
                marginTop: "12px",
                marginBottom: "12px"
              }}
            >
              {tags.type === "description" &&
                tags.list &&
                tags.list.map(tag => {
                  return (
                    <span
                      style={{
                        marginRight: "12px",
                        marginBottom: "12px",
                        padding: "12px",
                        backgroundColor: "rgb(171 ,43 ,47)",
                        color: "white"
                      }}
                      onClick={() =>
                        onFormChange({
                          currentTarget: {
                            name: "description",
                            value: tag
                          }
                        })
                      }
                      className="badge badge-pill badge-light"
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>

            <fieldset className="fieldset-input">
              <label>Varietal</label>
              <input
                type="text"
                name="variety"
                value={searchString.variety}
                onChange={onFormChange}
                onClick={event => setTagsToDisplay(event, setTags)}
                placeholder="Pinot Noir, White blend"
              />
            </fieldset>
            <div
              style={{
                margin: "auto",
                width: "80%",
                marginTop: "12px",
                marginBottom: "12px"
              }}
            >
              {tags.type === "variety" &&
                tags.list &&
                tags.list.map(tag => {
                  return (
                    <span
                      style={{
                        marginRight: "12px",
                        marginBottom: "12px",
                        padding: "12px",
                        backgroundColor: "rgb(171 ,43 ,47)",
                        color: "white"
                      }}
                      onClick={() =>
                        onFormChange({
                          currentTarget: {
                            name: "variety",
                            value: tag
                          }
                        })
                      }
                      className="badge badge-pill badge-light"
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>

            <fieldset className="fieldset-input">
              <label>Title|Vintage</label>
              <input
                type="text"
                name="title"
                value={searchString.title}
                onChange={onFormChange}
                onClick={event => setTagsToDisplay(event, setTags)}
              />
            </fieldset>

            <fieldset className="fieldset-input last-input">
              <label>Winery:</label>
              <input
                type="text"
                name="winery"
                value={searchString.winery}
                onChange={onFormChange}
                onClick={event => setTagsToDisplay(event, setTags)}
              />
            </fieldset>

            <fieldset>
              <button
                className="primary-button is-circle"
                style={{ width: "100%", margin: "auto", width: "50%" }}
                id="contact-submit"
                type="submit"
                value="Search"
                data-submit="...searching"
              >
                Search
              </button>
            </fieldset>
          </form>
        </div>
        {message && (
          <div
            ref={el => (scrollRef = el)}
            style={{
              padding: "48px",
              borderTop: "1px solid #e0e0e0",
              width: "100%",
              background: "white",
              minHeight: "500px"
            }}
          >
            <h2 style={{ marginBottom: "24px" }}>{message}</h2>
            <div className="container" style={{ width: "100%" }}>
              <div className="row">{WineTiles}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchForm;
