import axios from 'axios';

const api=axios.create({
    baseURL:'https://stagingapi.icash.com.np/api/login'
})

export default api;