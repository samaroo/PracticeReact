import axios from 'axios'

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const action = {
            type: 'FETCH_USER',
            payload: response.data
        }
        dispatch(action)
    }
}