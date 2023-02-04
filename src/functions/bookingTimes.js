import { fetchAPI } from "../functions/api"

let availableTimes  = fetchAPI(new Date())//= ['17:00','18:00','19:00','20:00','21:00','22:00']

export function initializeTimes(date=''){
    if(!date){
        date = new Date()
    }
    let local_date = new Date(date)
    availableTimes = fetchAPI(local_date)
    return availableTimes
}

export const updateTimes = (times, action) => {

    //select time
    times = initializeTimes(action.date)

	return times
}