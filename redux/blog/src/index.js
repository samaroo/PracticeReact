import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import {Provider} from 'react-redux'

//store
import {store} from './Redux/Reducers/Store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)