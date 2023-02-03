import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import CallToAction from './components/CallToAction';

test('renders hero section', () => {
  // render(<App />);
  render(<CallToAction />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  const initializeTimes  	= ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const updateTimes = (state = initializeTimes, action) => {
    if(action.type === '17:00') return ['18:00', '19:00', '20:00', '21:00', '22:00']
    if(action.type === '18:00') return ['17:00', '19:00', '20:00', '21:00', '22:00']
    if(action.type === '19:00') return ['17:00', '18:00', '20:00', '21:00', '22:00']
    if(action.type === '20:00') return ['17:00', '18:00', '19:00', '21:00', '22:00']
    if(action.type === '21:00') return ['17:00', '18:00', '19:00', '20:00', '22:00']
    if(action.type === '22:00') return ['17:00', '18:00', '19:00', '20:00', '21:00']
    return state
  }
  // const [state, dispatch] = useReducer( updateTimes, initializeTimes )
  render(<BookingForm availableTimes={{state: initializeTimes, dispatch: updateTimes}} />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

const initializeTimes = require("./functions/bookingTimes");
test('initializeTimes return correct', () => {
    expect(initializeTimes).not.toBeUndefined();
})

const updateTimes = require("./functions/bookingTimes");
test('updateTimes return correct', () => {
    expect(updateTimes).not.toBeUndefined();
})