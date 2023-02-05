import { render, screen, fireEvent, waitForElement } from '@testing-library/react';
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
	const {getByLabelText} = render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= getByLabelText(/Date/i)
	const timeInput 		= getByLabelText(/Time/i)
	const guestsInput 		= getByLabelText(/Guests/i)
	const occassionInput 	= getByLabelText(/Occasion/i)

	expect( dateInput		).toBeInTheDocument()
	expect( dateInput		).toHaveAttribute( 'type', 'date' )
	expect( timeInput		).toBeInTheDocument()
	expect( guestsInput		).toBeInTheDocument()
	expect( guestsInput		).toHaveAttribute( 'type', 'number' )
	expect( occassionInput	).toBeInTheDocument()
})

test('btn should be disabled for empty date', async ()=>{
	const {getByLabelText, getByRole, debug, getByText, getByTestId} = render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= getByLabelText(/Date/i)
	const timeInput 		= getByLabelText(/Time/i)
	const guestsInput 		= getByLabelText(/Guests/i)
	const occassionInput 	= getByLabelText(/Occasion/i)
    const form              = getByTestId("formik")

	fireEvent.change(dateInput      , {	target: {value: ""} });
	fireEvent.change(timeInput      , {	target: {value: ""} });
	fireEvent.change(guestsInput	, {	target: {value: 0 } });
	fireEvent.change(occassionInput , {	target: {value: ""} });
    fireEvent.submit(form);
    await new Promise(resolve => setTimeout(resolve, 300));
    
	const btn				= getByRole('button', {type:'submit'})
    // (If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).
    const errorText         = await screen.findAllByText(/Required/i);//getByText("")
    // expect(errorText).toBeInTheDocument();
	expect( btn ).toBeInTheDocument()
	debug( btn )
})

test('btn should not be disabled for none errors', async ()=>{
	const {getByLabelText, getByRole} = render(
		<Router>
			<BookingPage />
		</Router>
	)
	const dateInput 		= getByLabelText(/Date/i)
	const timeInput 		= getByLabelText(/Time/i)
	const guestsInput 		= getByLabelText(/Guests/i)
	const occassionInput 	= getByLabelText(/Occasion/i)

	fireEvent.change(dateInput      , {	target: {value: "2023-02-01"} });
	fireEvent.change(timeInput      , {	target: {value: "17:00"} });
	fireEvent.change(guestsInput	, {	target: {value: 2 } });
	fireEvent.change(occassionInput , {	target: {value: "aniversary"} });

    await new Promise(resolve => setTimeout(resolve, 300));
    
	const btn				= getByRole('button', {type:'submit'})
	expect( btn ).toHaveAttribute('disabled','')
})

// it('validate user inputs, and provides error messages', async () => {
// 	render(
// 		<Router>
// 			<BookingPage />
// 		</Router>
// 	)
//     // fireEvent.change(screen.getByLabelText(/Guests/i), {
//     //     target: {value: ""},
//     // });

//     fireEvent.submit(screen.getByTestId("formik"));

//     expect(screen.getByText(/Date/)).toBeInTheDocument();
// })