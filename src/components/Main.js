import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { updateTimes, initializeTimes } from "../functions/bookingTimes"
import { submitAPI } from "../functions/api"


function Main() {

	const [state, dispatch] = useReducer( updateTimes, initializeTimes() )

	const submitForm = (formData)=>{
		return submitAPI(formData)
	}

	return (
		<main>
			<BookingForm availableTimes={{state: state, dispatch: dispatch}} submitForm={submitForm}/>
		</main>
	);
}

export default Main;
