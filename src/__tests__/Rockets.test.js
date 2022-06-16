import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';

describe('It renders correctly', () => {
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
    expect(tree).toMatchSnapshot();
  });

  it('Renders the page correctly', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText(/Reserve Rocket/)).toBeInTheDocument();
  });

  // test('User can reserve rocket', () => {
  //   render(<Calculator />);
  //   const display = screen.getByText('00');
  //   const button = screen.getByText('8');
  //   fireEvent.click(button);
  //   expect(display.innerHTML).toBe('8');
  // });
});
