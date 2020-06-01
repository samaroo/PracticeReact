import React, { Component } from 'react'
import axios from "axios"
import "./SearchBar"
import SearchBar from './SearchBar'

//Api Key: AIzaSyBofGn6lA1aLNfJ2XqIgDX_AErxL-63EQw\
//pre-link: https://www.youtube.com/watch?v=

export class App extends Component {

    constructor(props){
        super(props);

        //binds
        this.submitHelper = this.submitHelper.bind(this);
    }

    submitHelper(textInBar){
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part : 'snippet',
                maxResults : 20,
                q: textInBar,
                key: "AIzaSyBofGn6lA1aLNfJ2XqIgDX_AErxL-63EQw"
            }
        }).then(
            //(response) => {this.setState({numberOfResults: response.data.total, results: response.data.results})}
            (response) => {console.log(response)}, (err) => {console.log(err)}
        );
    }

    render() {
        return (
            <div id="content">
                <div className="searchBarContainer">
                    <SearchBar submitHelper={this.submitHelper}/>
                </div>
                <div className="main">
                    <div className="videoPlayer">
                        Video Player
                    </div>
                    <div className="relatedVideos">
                        Related Videos
                    </div>
                </div>
            </div>
        )
    }
}

export default App
