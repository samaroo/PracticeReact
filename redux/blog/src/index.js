import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import {Provider} from 'react-redux'

import {fetchUser} from './Redux/ActionCreators/FetchUser'

//store
import {store} from './Redux/Reducers/Store'

//
store.dispatch(fetchUser(1))
store.dispatch(fetchUser(2))
store.dispatch(fetchUser(3))
//

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)