import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//import reducers
import {fetchDataReducer} from './FetchDataReducer'

//create & export store
export const store = createStore(fetchDataReducer, {response: []}, applyMiddleware(thunk))