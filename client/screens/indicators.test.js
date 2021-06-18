import React from 'react';
import { render } from '@testing-library/react-native';
import Indicators from './indicators';

describe('<Indicators />', () => {

  it('contains button with text label "update"', () => {
    const { queryByText } = render(<Indicators />);
    const button = queryByText('Update');
    expect(button).toBeTruthy();

  });




  it('has 1 child', () => {
    const tree = renderer.create(<Indicators />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});