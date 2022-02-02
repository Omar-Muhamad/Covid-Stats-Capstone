import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configreStore';
import Home from '../Components/Home';

describe('Test Home render', () => {
  test('Test Home Render', () => {
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
