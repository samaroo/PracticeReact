import React, { Component } from 'react'
import SongList from './SongList'
import SongInfo from './SongInfo'
import '../Style/App.css'

export class App extends Component {
    render() {
        return (
            <div className="center">
                <div className="content">
                    <div className="songListWrapper">
                        <SongList/>
                    </div>
                    
                    <div className="temp">
                        <div className="songInfoWrapper">
                            <SongInfo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
