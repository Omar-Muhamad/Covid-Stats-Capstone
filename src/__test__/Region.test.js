import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configreStore';
import Region from '../Components/Region';

describe('Test Region render', () => {
  test('Test Region Render', () => {
    const tree = render(
      <Provider store={store}>
        <Region />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
