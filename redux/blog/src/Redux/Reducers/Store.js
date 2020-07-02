import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'

//import reducers
import {fetchPostsReducer} from './FetchPostsReducer'

//create combined reducer
const combinedReducers = combineReducers({
    posts: fetchPostsReducer
})

//create & export store
export const store = createStore(combinedReducers, applyMiddleware(thunk))