// ACTIONS -> Describes what you want to do (function that return an object)
export const increment = (number = 1) => {
    return (dispatch) => {
        dispatch ({
            type: 'INCREMENT',
            payload: number
        })
    }
}
  
export const decrement = () => {
    return (dispatch) => {
        dispatch ({
            type: 'DECREMENT'
        })
    }
}

export const typeAll = () => {
    return (dispatch) => {
        dispatch ({
            type: 'ALL'
        })
    }
}

export const typeOne = () => {
    return (dispatch) => {
        dispatch ({
            type: 'ONE'
        })
    }
}

export const money = (sum) => {
    return (dispatch) => {
        dispatch ({
            type: 'MONEY',
            payload: sum
        })
    }
}

export const shelter = (shelterId) => {
    return (dispatch) => {
        dispatch ({
            type: 'SHELTER',
            payload: shelterId
        })
    }
}

export const name = (name) => {
    return (dispatch) => {
        dispatch ({
            type: 'NAME',
            payload: name
        })
    }
}

export const surname = (surname) => {
    return (dispatch) => {
        dispatch ({
            type: 'SURNAME',
            payload: surname
        })
    }
}

export const email = (email) => {
    return (dispatch) => {
        dispatch ({
            type: 'EMAIL',
            payload: email
        })
    }
}

export const phone = (phoneNumber) => {
    return (dispatch) => {
        dispatch ({
            type: 'PHONE',
            payload: phoneNumber
        })
    }
}

export const agree = () => {
    return (dispatch) => {
        dispatch ({
            type: 'AGREE',
        })
    }
}