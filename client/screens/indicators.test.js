import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { server } from '../mocks/server';
import Indicators from './indicators';
// import ApiService from '../services/ApiService';
// jest.mock('../services/ApiService');
// import ClickService from '../services/ClickService';
// jest.mock('../services/ClickService');
// ClickService.getData.mockImplementation(() => Promise.resolve([]));




describe('<Indicators />', () => {

  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  // Clean up after the tests are finished.
  afterAll(() => server.close())

  it('contains button with text label "update"', async () => {

    // jest.mock('../services/ClickService', () => {
    //   return {
    //     getData: jest.fn(),
    //   }
    // })

    let queryByText;
    const indicator = render(<Indicators />);
    queryByText = indicator.queryByText;

    const button = queryByText('Update');
    expect(button).toBeTruthy();

  });

  it.only('updates item list when pressing update button', async () => {


    // jest.mock('../services/ApiService', () => {
    //   return {
    //     getGoogleData: jest.fn(),
    //   }
    // })

    // jest.mock('../services/ClickService', () => {
    //   return {
    //     getData: jest.fn(),
    //   }
    // })

    const { queryByText } = render(<Indicators />);


    // const mockGetData = jest.fn();



    const button = queryByText('Update');
    await fireEvent(button, 'onPress');



  });

});