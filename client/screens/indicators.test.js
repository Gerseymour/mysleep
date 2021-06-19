import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { server } from '../mocks/server';
import Indicators from './indicators';

describe('<Indicators />', () => {

  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  // Clean up after the tests are finished.
  afterAll(() => server.close())

  jest.setTimeout(300000); // 120 second

  it('contains button with text label "update"', async () => {

    const indicator = render(<Indicators />);
    const { queryByText } = indicator;

    const button = queryByText('Update');
    expect(button).toBeTruthy();

  });

  it('loads indicators list by API upon component mounting', async () => {

    const { queryByText, findByText } = render(<Indicators />);

    const button = queryByText('Update');
    await fireEvent(button, 'onPress');

    const result = await findByText('habit1 __ 4.00hrs');
    expect(result).toBeTruthy();

  })

  it('updates item list when pressing update button', async () => {

    const { queryByText, findByText } = render(<Indicators />);

    const button = queryByText('Update');
    await fireEvent(button, 'onPress');

    const result = await findByText('habit1 __ 4.00hrs');
    expect(result).toBeTruthy();

  }),
    it('sorts indicators lowest to highest', async () => {

      const { queryByText, findAllByTestId } = render(<Indicators />);

      const button = queryByText('Update');
      await fireEvent(button, 'onPress');

      const result = await findAllByTestId('Item');
      expect(result[0]).toHaveTextContent('habit1 __ 4.00hrs')


    })
});
