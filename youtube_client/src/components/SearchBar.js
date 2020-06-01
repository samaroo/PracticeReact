import React, { Component } from 'react';
import "../style/index.css"

export class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {loading: false, textInBar: ""};

        //binds
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){

        event.preventDefault();

        this.setState({ loading: true});
        //send api request from App.js
        this.props.submitHelper(this.state.textInBar);
    }

    handleChange(event){
        this.setState({textInBar: event.target.value});
    }

    render() {
        return (
            <div className="ui search">
                <form onSubmit={this.handleSubmit} className="ui icon input">
                    <input 
                    className="prompt"
                    placeholder="Search YouTube..."
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.textInBar}
                    onFocus={() => {document.getElementById("main").style.filter = "blur(5px)"; document.getElementById("main").style.transition = "all 0.3s ease"}}
                    onBlur={() => document.getElementById("main").style.filter = "none"}
                    />
                    <i class="search icon"></i>
                </form>
            </div>
        )
    }
}

export default SearchBar
