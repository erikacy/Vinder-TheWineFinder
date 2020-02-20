import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WineTile from '../wines/WineTile';

const SearchForm = () => {
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
  const [message, setMessage] = useState("")

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
    if (body.wines.length === 0){
      setMessage("No Wine Pairing Matched At the Moment")
    } else {
    setSearchWines(body.wines)
    setMessage("Cheers!")
    clearForm()
    }
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
   <div className="container">
      <form id="contact" onSubmit={handleSubmit}>
          <h3>Pairing</h3>
        <fieldset>
          <label>Country</label>
          <input type="text" name="country" value={searchString.country} onChange={onFormChange} placeholder="France, Italy..." tabIndex="1"/>
        </fieldset>

        <fieldset>
          <label>Region</label>
          <input type="text" name="region" value={searchString.region} onChange={onFormChange} placeholder="Bordeaux, Napa, Rioja" tabIndex="1" />
        </fieldset>

        <fieldset>
          <label>Taste/Food Pairing</label>
          <input type="text" name="description" value={searchString.description} onChange={onFormChange} placeholder="Seafood, steak, sweet, spicy, tannic" tabIndex="1"/>
        </fieldset>

        <fieldset>
          <label>Varietal</label>
          <input type="text" name="variety" value={searchString.variety} onChange={onFormChange} placeholder="Sauvignon Blanc, Cabernet, Sparkling, Rosé" tabIndex="1" />
        </fieldset>

        <fieldset>
          <label>Title/Vintage</label>
          <input type="text" name="title" value={searchString.title} onChange={onFormChange} placeholder="" tabIndex="1"/>
        </fieldset>


        <fieldset>
          <label>Winery:</label>
          <input type="text" name="winery" value={searchString.winery} onChange={onFormChange} placeholder="" tabIndex="1"/>
        </fieldset>

        <fieldset>
        <button id="contact-submit" type="submit" value="Search" data-submit="...searching">Search</button>
        </fieldset>

      </form>
    </div>

    <div>{message}</div>

    <div className="card-group">
      {WineTiles}
    </div>
  </>
 )
}

export default SearchForm
