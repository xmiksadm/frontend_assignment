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

export const shelter = (name) => {
    return (dispatch) => {
        dispatch ({
            type: 'SHELTER',
            payload: name
        })
    }
}