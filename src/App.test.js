import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CallToAction from './components/CallToAction';
import { BrowserRouter as Router} from 'react-router-dom';
import BookingPage from './components/BookingPage';
import {initializeTimes,updateTimes} from './functions/bookingTimes'

test('renders hero section', () => {
	render(
		<Router>
			<CallToAction />
		</Router>
	)
	const linkElement = screen.getByText(/Little Lemon/i);
	expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
	render(
		<Router>
			<BookingPage />
		</Router>
	)
	const headingElement = screen.getByText("Reserve a table");
	expect(headingElement).toBeInTheDocument();
})

test('initializeTimes return correct', () => {
	// let result = initializeTimes().length > 3
	// if( result )
	// 	return Promise.resolve(result)
	// else
	// 	return false
	expect(initializeTimes('2023-02-05')).toHaveLength(7)
})

test('updateTimes return correct', () => {
	expect(updateTimes([],{date:'2023-02-05'})).toHaveLength(7)
})

test('validate inputs', () => {
	expect(updateTimes([],{date:'2023-02-05'})).toHaveLength(7)
})

test('reders form properly', ()=>{
	render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= screen.getByLabelText(/Date/i)
	const timeInput 		= screen.getByLabelText(/Time/i)
	const guestsInput 		= screen.getByLabelText(/Guests/i)
	const occassionInput 	= screen.getByLabelText(/Occasion/i)

	expect( dateInput		).toBeInTheDocument()
	expect( dateInput		).toHaveAttribute( 'type', 'date' )
	expect( timeInput		).toBeInTheDocument()
	expect( guestsInput		).toBeInTheDocument()
	expect( guestsInput		).toHaveAttribute( 'type', 'number' )
	expect( occassionInput	).toBeInTheDocument()
})

test('btn should be disabled for empty date', async ()=>{
	render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= screen.getByLabelText(/Date/i)
	const timeInput 		= screen.getByLabelText(/Time/i)
	const guestsInput 		= screen.getByLabelText(/Guests/i)
	const occassionInput 	= screen.getByLabelText(/Occasion/i)
    const form              = screen.getByTestId("formik")

	const btn				= screen.getByRole('button', {type:'submit'})
	fireEvent.change(dateInput      , {	target: {value: ""} });
	fireEvent.change(timeInput      , {	target: {value: ""} });
	fireEvent.change(guestsInput	, {	target: {value: 0 } });
	fireEvent.change(occassionInput , {	target: {value: ""} });
    fireEvent.submit(form);

    await waitFor(() => {
	    expect( btn ).toHaveAttribute('disabled')
    })
	// screen.debug( btn )
})

test('btn should not be disabled for none errors', async ()=>{
	render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= screen.getByLabelText(/Date/i)
	const timeInput 		= screen.getByLabelText(/Time/i)
	const guestsInput 		= screen.getByLabelText(/Guests/i)
	const occassionInput 	= screen.getByLabelText(/Occasion/i)

	fireEvent.change(dateInput      , {	target: {value: '2023-02-05'} });
	fireEvent.change(timeInput      , {	target: {value: "17:00"} });
	fireEvent.change(guestsInput	, {	target: {value: 2 } });
	fireEvent.change(occassionInput , {	target: {value: "anniversary"} });

	const btn				= screen.getByRole('button', {type:'submit'})
    await waitFor(() => {
        expect( btn ).not.toHaveAttribute('disabled')
    })
	// screen.debug( btn )
})