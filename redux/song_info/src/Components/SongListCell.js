import React, { Component } from 'react'
import '../Style/SongListCell.css'
import {connect} from 'react-redux'
import {selectSong} from '../Redux/ActionCreators'

export class SongListCell extends Component {
    render() {
        return (
            <div class="cell">
                <span>{this.props.song}</span>
                <button id="button" onClick={() => {this.props.selectSong(this.props.song)}}>select</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentSong : state.currentSong}
}

export default connect(mapStateToProps, {selectSong})(SongListCell)
