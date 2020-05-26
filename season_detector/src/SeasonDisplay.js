import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

//returns bool - true for summer, false for winter
function determineSeason(lat, month) {
    if(month > 2 && month < 9){
        return lat > 0;
    }
    return lat < 0;
};

var seasonAttr = {
    summer: {
        message: "Lets hit the beach!",
        subMessage: "It's summer where you are!",
        iconID: "sun"
    },
    winter:{
        message: "Brr! Grab a jacket!",
        subMessage: "It's winter where you are!",
        iconID: "snowflake"
    }
};

class SeasonDisplay extends Component{

    render(){
        var attributes = determineSeason(this.props.lat, this.props.month) ? seasonAttr.summer : seasonAttr.winter;
        return (
            <div>
                <Icon name='home' size='mini' /><Icon name="home" />
                <h1>{attributes.message}</h1>
                <h4>{attributes.subMessage}</h4>
            </div>
        );
    };
};

export default SeasonDisplay;