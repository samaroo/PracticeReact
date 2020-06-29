import React, { Component } from 'react'
import axios from "axios"
import "./SearchBar"
import SearchBar from './SearchBar'
import SearchResults from "./SearchResults"

//Api Key: AIzaSyBofGn6lA1aLNfJ2XqIgDX_AErxL-63EQw\
//pre-link: https://www.youtube.com/watch?v=

export class App extends Component {

    constructor(props){
        super(props);

        //state initialization
        this.state = {results: []};

        //binds
        this.submitHelper = this.submitHelper.bind(this);
    }

    submitHelper(textInBar){
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part : 'snippet',
                maxResults : 12,
                q: textInBar,
                key: "AIzaSyBofGn6lA1aLNfJ2XqIgDX_AErxL-63EQw"
            }
        }).then(
            //(response) => {this.setState({numberOfResults: response.data.total, results: response.data.results})}
            (response) => {console.log(response); this.setState({results: response.data.items});}, (err) => {console.log(err)}
        );
    }

    render() {
        return (
            <div id="content">
                <div className="searchBarContainer">
                    <SearchBar submitHelper={this.submitHelper}/>
                </div>
                <div id="main">
                    <div className="videoPlayer">
                    </div>
                    <div className="relatedVideos">
                    </div>
                    <div className="searchResults">
                        <SearchResults items={this.state.results}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
