import axios from "axios";

const axInstance =  axios.create({
    baseURL: 'https://burguer-builder-e863a.firebaseio.com'
})

export default axInstance;