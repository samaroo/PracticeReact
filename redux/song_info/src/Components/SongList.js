import React, { Component } from 'react'
import SongListCell from './SongListCell'
import '../Style/SongList.css'
import {connect} from 'react-redux'
import {selectSong} from '../Redux/ActionCreators'

export class SongList extends Component {

    renderSongs = () => {

        const songs = [
            "Choodi Baji Hai",
            "Tumse Milna",
            "Ve Mahi",
            "Dagariya Chalo",
            "Sajan Tumse"
        ]

        return songs.map((song) => {
            return <SongListCell song={song}/>
        })
    }

    render() {
        return (
            <div className="list">
                {this.renderSongs()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentSong : state.currentSong}
}

export default connect(mapStateToProps, {selectSong})(SongList)
