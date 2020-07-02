import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchData } from '../Redux/ActionCreators/FetchData'

//style
import '../Style/App.css'

export class App extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    renderData = () => {
        return this.props.response.map((result) => {
            return <li>{result.title}</li>
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.renderData()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //return {response: state.response}
    return {response: state.response}
}

export default connect(mapStateToProps, {fetchData})(App)
