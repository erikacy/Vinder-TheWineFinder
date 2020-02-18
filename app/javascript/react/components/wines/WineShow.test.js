import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WineShow from './WineShow';
Enzyme.configure({ adapter: new Adapter() });

describe('WineShow', () => {
  let wrapper;
  let wine;

  beforeEach(() => {
    wine = {
      country: 'US',
      description: 'This aromatic malbec has the smell of chocholate and a hint of oolong tea. Pairs well with steak and lamb.',
      designation: 'Schooner Vineyard',
      score: 90,
      price: 40,
      province: 'California',
      region: 'Sonoma',
      title: 'Red Schooner Voyage 7',
      variety: 'Malbec',
      winery: 'Red Schooner'
    };

    wrapper = mount(
      <BrowserRouter>
        <WineShow wine={wine} />
      </BrowserRouter>
    );
  });

  xit('should render an img tag with the url of the cape', () => {
    expect(wrapper.find('img').props()['src']).toBe(
      'https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg'
    );
  });

  xit('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find('h1').text()).toBe('Nedzilla');
  });

  xit('should render an h4 tag with the full name of the cape', () => {
    expect(wrapper.find('#full-name').text()).toBe('Debbie Lehman');
  });

  xit('should render an h4 tag with the gender of the cape', () => {
    expect(wrapper.find('#gender').text()).toBe('Gender: Male');
  });

  xit('should render an h4 tag with the affiliation of the cape', () => {
    expect(wrapper.find('#affiliation').text()).toBe(
      'Affiliation: Starbucks Galactica'
    );
  });

  xit('should render an h4 tag with the intelligence of the cape', () => {
    expect(wrapper.find('#intelligence').text()).toBe('100');
  });

  xit('should render an h4 tag with the strength of the cape', () => {
    expect(wrapper.find('#strength').text()).toBe('77');
  });

  xit('should render an h4 tag with the speed of the cape', () => {
    expect(wrapper.find('#speed').text()).toBe('89');
  });

  xit('should render an h4 tag with the durability of the cape', () => {
    expect(wrapper.find('#durability').text()).toBe('55');
  });

  xit('should render an h4 tag with the power of the cape', () => {
    expect(wrapper.find('#power').text()).toBe('44');
  });

  xit('should render an h4 tag with the combat of the cape', () => {
    expect(wrapper.find('#combat').text()).toBe('33');
  });
});
