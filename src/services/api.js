import axios from 'axios';

export default axios.create({
    baseURL: 'https://dropBox-server-clone.herokuapp.com'
})