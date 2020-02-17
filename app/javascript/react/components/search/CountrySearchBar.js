import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WineTile from '../wines/WineTile';

const CountrySearchBar = () => {
  const defaultSearch = {
    country: '',
    region: '',
    description: '',
    variety: '',
    title: '',
    winery: '',
    price: 20
  };
  const [searchWines, setSearchWines] = useState([])
  const [searchString, setSearchString] = useState(defaultSearch)

  const handleSearchChange = event => {
    setSearchString(event.currentTarget.value)
  }

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
    event.preventDefault()
    const body = JSON.stringify({
      search_strings: searchString
    })
    fetch('/api/v1/search.json', {
    method: 'POST',
    body: body,
    credentials: 'same-origin',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(body => {
    setSearchWines(body.wines)
    clearForm()
  })
  }

  const WineTiles = searchWines.map(wine => {
  let id = wine.id;
  return (
    <Link to={`/wines/${id}`} target="_blank" key={wine.id}>
      <WineTile id={wine.id} wine={wine} />
    </Link>
    );
  });

 return(
   <>
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h2>Find Your Wine</h2>
    <label>Country:
      <input type="text" id="search" name="country" value={searchString.country} onChange={onFormChange} placeholder="France, Italy..."/>
    </label>

    <label>Region:
      <input type="text" id="search" name="region" value={searchString.region} onChange={onFormChange} placeholder="Bordeaux, Napa, Rioja"/>
    </label>

    <label>Taste/Food Pairing:
      <input type="text" id="search" name="description" value={searchString.description} onChange={onFormChange} placeholder="sweet, dry, acidic, tannic"/>
     </label>

    <label>Variety:
      <input type="text" id="search" name="variety" value={searchString.variety} onChange={onFormChange} placeholder="Sauvignon Blanc, Cabernet, Sparkling, Rosé"/>
    </label>

    <label>Title/Vintage:
      <input type="text" id="search" name="title" value={searchString.title} onChange={onFormChange} placeholder=""/>
     </label>

    <label>Winery:
      <input type="text" id="search" name="winery" value={searchString.winery} onChange={onFormChange} placeholder=""/>
    </label>

    <label>Price
      <input type="range" className="custom-range" id="customRange" min="0" max="100" step="1" value={searchString.price} onChange={onFormChange} >
      </input>
    </label>


    <input type="submit" value="go" id="submit"></input>
    </form>

    <div>
      {WineTiles}
    </div>
  </>
 )
}

export default CountrySearchBar
