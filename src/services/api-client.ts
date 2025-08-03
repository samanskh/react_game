import axios from "axios";
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'c748985decf14d37a6916c13c2dbe8ae'
    }
})