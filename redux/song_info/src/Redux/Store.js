import {createStore} from 'redux'

//Reducers

const currentSongReducer = (state = {currentSong: 'Select a song'}, action) => {
    switch(action.type) {
        case 'SELECT': 
            return Object.assign({}, state, {
                currentSong: action.payload
            })
        default :
            return state
    } 
}

//Store

export const store = createStore(currentSongReducer)
