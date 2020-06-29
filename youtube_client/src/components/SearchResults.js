import React, { Component } from 'react'

export class SearchResults extends Component {

    renderListOfResults = () => {
        return this.props.items.map((item) => <img src={item.snippet.thumbnails.high.url} style={{height: "80%"}, {width: "80%"}, {objectFit: "cover"}, {maxHeight: "80%"}, {maxWidth: "80%"}}/>);
    }

    render() {
        return (
            <div className="resultsContainer">
                {this.renderListOfResults()}
            </div>
        )
    }
}

export default SearchResults
