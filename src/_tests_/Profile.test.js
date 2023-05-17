import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../components/profile/Profile';
import store from '../redux/store';

describe('Test Profile component', () => {
  it('Renders well', () => {
    const tree = renderer.create(
    <Provider store={store}>
        <Profile />
    </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
