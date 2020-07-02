export const fetchDataReducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'FETCH_DATA' :
            return {response: action.payload}
        default :
            return state
    }
}
