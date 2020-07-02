import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/ActionCreators/FetchPosts'

//style
import '../Style/App.css'

export class App extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderData = () => {
        return this.props.posts.map((post) => {
            return <li>{post.title}</li>
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
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(App)
