import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});

// setup testing using Jest
// install enzyme, add setupTests.js to setup enzyme
// exclude some files for test coverage