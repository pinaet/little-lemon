export const availableTimes  = [
    {
        id: 1,
        status: false,
        time: '17:00'
    },
    {
        id: 2,
        status: false,
        time: '18:00'
    },
    {
        id: 3,
        status: false,
        time: '19:00'
    },
    {
        id: 4,
        status: false,
        time: '20:00'
    },
    {
        id: 5,
        status: false,
        time: '21:00'
    },
    {
        id: 6,
        status: false,
        time: '22:00'
    }
]

export function initializeTimes(times = availableTimes){
    times.map( time => {
        time.status = false
        return time
    })
    return times
}

export const updateTimes = (times = availableTimes, action) => {

    initializeTimes(times)

    //select time
    times.map( time => {
        if(time.time===action.time)
            time.status = true
        return time
    })

	return times
}