import React, {Component} from 'react';
import {Button, Comment} from 'semantic-ui-react';

class App extends Component{

  constructor (props){
    super(props);

    this.state = {long: null, lat: null, errMsg: null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({long: position.coords.longitude}); this.setState({lat: position.coords.latitude});},
      (err) => {this.setState({errMsg: err.message});}
    );
    
  };

  render(){
    if((!this.state.long || !this.state.lat) && this.state.errMsg){
      return <div>Error: {this.state.errMsg}</div>;
    }
    if(((!this.state.long || !this.state.lat) && !this.state.errMsg)){
      return <div>Loading...</div>;
    }
    return (
      <div>
        Longitude: {this.state.long}
        <br/>
        Latitude: {this.state.lat}
      </div>
    );
  } 
}

export default App;
