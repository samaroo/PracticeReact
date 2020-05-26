import React, {Component} from 'react';
import {Button, Comment} from 'semantic-ui-react';

class App extends Component{
  
  location = window.navigator.geolocation.getCurrentPosition(
    function (position) {console.log(position)},
    function (err) {console.log(err)}
  );

  render(){
    return <div>Hello</div>;
  } 
}

export default App;
