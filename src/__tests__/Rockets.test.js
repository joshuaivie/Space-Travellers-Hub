import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';

describe('Page renders correctly', () => {
  it('Renders the rockets page', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Rockets />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const element = document.querySelector('.rocket-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
