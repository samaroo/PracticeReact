import React, { Component } from 'react'
import axios from "axios"
import SearchBar from "./SearchBar"
import ImageView from "./ImageView"

export class App extends Component {

    constructor(props){
        super(props);

        this.state = {numberOfResults: 0, results: []};

        //binds
        this.submitHelper = this.submitHelper.bind(this);
    }

    submitHelper = (textInBar) => {
        axios.get("https://api.unsplash.com/search/photos", {
            headers: {
                Authorization: "Client-ID cwRIPWdrcFoXqbTnb31n-1vmEhHYE9DWsbXpLDpNhZ0"
            },
            params: {
                query: {textInBar}
            }
        }).then(
            (response) => {this.setState({numberOfResults: response.data.total, results: [response.data.results]})}
        );
    }

    render() {
        return (
            <div className="center">
                <SearchBar submitHelper = {this.submitHelper}/>
                <br/>
                {/* <h4>Number of results: {this.state.numberOfResults}</h4> */}
                <ImageView results={this.state.results}/>

            </div>
        );
    };
}

export default App
