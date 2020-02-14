import _ from 'lodash';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorList from './ErrorList';


const NewWineForm = props => {
  const defaultForm = {
    country: '',
    description: '',
    designation: '',
    score: 87,
    price: 25,
    province: '',
    region: '',
    title: '',
    variety: '',
    winery: ''
  };
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [freshWine, setFreshWine] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [duplicateError, setDuplicateError] = useState("")


  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = Object.keys(form);

    requiredFields.forEach(field => {
      if (form[field].toString().trim() === '') {
        submitErrors = {
          ...submitErrors,
          [field]: 'is blank'
        };
      }
    });
    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const addWine = () => {
    fetch('/api/v1/wines', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
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
      .then(body => {
        if (body.errors) {
          setDuplicateError(body.errors[0]);
        } else {
          debugger
          setFreshWine(body.wine.id);
          setRedirect(true);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const onFormChange = event => {
    const key = event.currentTarget.id;
    const value = event.currentTarget.value;
    setForm({
      ...form,
      [key]: value
    });
  };

  const clearForm = () => {
    setForm(defaultForm);
  };

  const formSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      event.preventDefault();
      addWine();
    }
  };

  if (redirect && freshWine !== null) {
    let path = `/wines/${freshWine}`;
    return <Redirect to={path} />;
  }

  return (
    <>
      <div>
        <h5>{duplicateError}</h5>
      </div>
        <div id='form-main'>
          <div id='form-div'>
          <form onSubmit={formSubmit} id='form1'>
            <ErrorList errors={errors} />
            <div className="segment">
              <h1>Add New Wine</h1>
            </div>

            <div className='grid-container'>
              <div className=' grid-x grid-padding-x'>
                <div className='medium-6 cell'>
                  <label>
                    Title
                    <input
                      onChange={onFormChange}
                      id='title'
                      name='title'
                      type='text'
                      placeholder='FRANK FAMILY CABERNET NAPA'
                      value={form.title}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Variety
                    <input
                      onChange={onFormChange}
                      id='variety'
                      name='variety'
                      type='text'
                      placeholder='Cabernet Sauvignon'
                      value={form.variety}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Winery
                    <input
                      onChange={onFormChange}
                      id='winery'
                      name='winery'
                      type='text'
                      placeholder='FRANK FAMILY'
                      value={form.winery}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Country
                    <input
                      onChange={onFormChange}
                      id='country'
                      name='country'
                      type='text'
                      placeholder='US'
                      value={form.country}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    State or Province
                    <input
                      onChange={onFormChange}
                      id='province'
                      name='province'
                      type='text'
                      placeholder='California'
                      value={form.province}
                    />
                  </label>
                </div>

                <div className='medium-6 cell'>
                  <label>
                    Region
                    <input
                      onChange={onFormChange}
                      id='region'
                      name='region'
                      type='text'
                      placeholder='Napa Valley'
                      value={form.region}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Designation
                    <input
                      onChange={onFormChange}
                      id='designation'
                      name='designation'
                      type='text'
                      placeholder='Zenith Vineyard'
                      value={form.designation}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Your tasting note
                    <input
                      onChange={onFormChange}
                      id='description'
                      name='description'
                      type='text'
                      placeholder='Smooth, rich...'
                      value={form.description}
                    />
                  </label>
                </div>

                <div className='medium-6 cell'>
                  <label>
                    Score
                    <input
                      onChange={onFormChange}
                      id='score'
                      name='score'
                      type='number'
                      value={form.score}
                    />
                  </label>
                </div>

                <div className='medium-6 cell'>
                  <label>
                    Price
                    <input
                      onChange={onFormChange}
                      id='price'
                      name='price'
                      type='number'
                      value={form.price}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className='button-group'>
              <button onClick={clearForm} className='button'>
                Clear
              </button>
              <input type='submit' className='button' value='Submit Wine' />
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default NewWineForm;
