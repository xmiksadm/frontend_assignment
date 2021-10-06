// ACTIONS -> Describes what you want to do (function that return an object)
export const increment = (number = 1) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}
  
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}