import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets/Rockets';
import store from '../redux/store';

describe('Test Rocket component', () => {
  it('If it renders well', () => {
    const tree = renderer.create(
    <Provider store={store}>
        <Rockets />
    </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
