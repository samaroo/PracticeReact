import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux'
import ReactRedux, {Provider, connect} from 'react-redux'
import App from './Components/App'
import {selectSong} from './Redux/ActionCreators'

//import store
import {store} from './Redux/Store'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );