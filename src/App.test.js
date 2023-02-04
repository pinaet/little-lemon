import { render, screen, fireEvent } from '@testing-library/react';
import CallToAction from './components/CallToAction';
import {BrowserRouter as Router} from 'react-router-dom';
import BookingPage from './components/BookingPage';
import {initializeTimes,updateTimes} from './functions/bookingTimes'

test('renders hero section', () => {
	render(<CallToAction />);
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