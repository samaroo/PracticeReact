import axios from 'axios'

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const action = {
            type: 'FETCH_DATA',
            payload: response.data
        }
        dispatch(action)
    }
}