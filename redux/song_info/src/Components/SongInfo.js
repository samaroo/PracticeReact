import React, { Component } from 'react'
import {connect} from 'react-redux'

export class SongInfo extends Component {

    render() {
        return (
            <div>
                <span>{this.props.currentSong}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentSong : state.currentSong}
}

export default connect(mapStateToProps)(SongInfo)
