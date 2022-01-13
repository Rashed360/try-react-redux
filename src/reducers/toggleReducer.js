const toggleReducer = (state=false, action) => {
    if (action.type === 'TOG') {
        return !state
    } else {
        return state
    }
}

export default toggleReducer