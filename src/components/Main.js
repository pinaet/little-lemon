import { useReducer } from "react";
import BookingForm from "./BookingForm";

const updateTimes = (state, action) => {
	if(action.type === '17:00') return ['18:00', '19:00', '20:00', '21:00', '22:00']
	if(action.type === '18:00') return ['17:00', '19:00', '20:00', '21:00', '22:00']
	if(action.type === '19:00') return ['17:00', '18:00', '20:00', '21:00', '22:00']
	if(action.type === '20:00') return ['17:00', '18:00', '19:00', '21:00', '22:00']
	if(action.type === '21:00') return ['17:00', '18:00', '19:00', '20:00', '22:00']
	if(action.type === '22:00') return ['17:00', '18:00', '19:00', '20:00', '21:00']
	return state
}

function Main() {
	const initializeTimes  	= ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
	const [state, dispatch] = useReducer( updateTimes, initializeTimes )

	return (
		<main>
			<BookingForm availableTimes={{state: state, dispatch: dispatch}} />
		</main>
	);
}

export default Main;
