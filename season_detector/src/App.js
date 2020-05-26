import React, {Component} from 'react';
import {Button, Comment} from 'semantic-ui-react';
import SeasonDisplay from "./SeasonDisplay";

class App extends Component{

  constructor (props){
    super(props);
    this.state = {long: null, lat: null, month: null, errMsg: null};
  };

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({long: position.coords.longitude}); this.setState({lat: position.coords.latitude});},
      (err) => {this.setState({errMsg: err.message});}
    );

    this.setState({month: new Date().getMonth()});

  };

  render(){
    return (
      <SeasonDisplay lat={this.state.lat} month={this.state.month} /> 
    );
  } 
};

export default App;
