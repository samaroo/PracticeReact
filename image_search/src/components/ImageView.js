import React, { Component } from 'react'
import "../style/index.css"

export class ImageView extends Component {
    render() {
        return this.props.results.map((result) => <img className="resultImage" key={result.id} src={result.urls.regular} />);
    }
}

export default ImageView
