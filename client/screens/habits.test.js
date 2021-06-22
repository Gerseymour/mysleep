import Habits from './habits'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { server } from '../mocks/server'
import { handler3, handler4 } from '../mocks/handlers'
//arrange act assert


describe('<Habits />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())



  it('contains an input text', async () => {
    const habits = render(<Habits />);
    const { queryByPlaceholderText }= habits;
  
    const textInput = queryByPlaceholderText('Add habit');
  
    expect(textInput).toBeTruthy();
    
  })
  
  it('contains an button with submit', async () => {
    const habits = render(<Habits />);
    const { queryByText }= habits;
  
    const button = queryByText('submit');
  
    expect(button).toBeTruthy();
    

  })

  it('when submit is called the data is posted to api', async () => {
    server.use(...handler3)
    const { queryByText, findByText, getByPlaceholderText } = render(<Habits />);

    const button = queryByText('submit');
    await fireEvent(getByPlaceholderText('Add habit'), 'changeText', 'habit1');
    await fireEvent(button, 'onPress');
    const result = await findByText('habit1');
    expect(result).toBeTruthy();

  })

  it('when submit is called the flatlist renders the correct amount of cards', async () => {
    const { queryByText, findByText, getByPlaceholderText } = render(<Habits />);
    
    server.use(...handler4)
    const button = queryByText('submit');
    await fireEvent(getByPlaceholderText('Add habit'), 'changeText', 'habit1');
    await fireEvent(button, 'onPress');
    server.use(...handler3)

    await fireEvent(getByPlaceholderText('Add habit'), 'changeText', 'habit2');
    await fireEvent(button, 'onPress');
    const result = await findByText('habit1');
    const result2 = await findByText('habit2');
    expect(result).toBeTruthy();
    expect(result2).toBeTruthy();

    // console.log(result);
    // expect(result).toHaveLength(1);
    // const result = await findAllByTestId('Habit');

  })

 
});