import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { updateTimes, availableTimes } from "../functions/bookingTimes"


function Main() {
	const [state, dispatch] = useReducer( updateTimes, availableTimes )

	return (
		<main>
			<BookingForm availableTimes={{state: state, dispatch: dispatch}} />
		</main>
	);
}

export default Main;
