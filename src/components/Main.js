import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { updateTimes, initializeTimes } from "../functions/bookingTimes"


function Main() {

	const [state, dispatch] = useReducer( updateTimes, initializeTimes() )

	return (
		<main>
			<BookingForm availableTimes={{state: state, dispatch: dispatch}} />
		</main>
	);
}

export default Main;
