import axios from 'axios'

export class API {
    GET(url) {
        return axios(`${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
}



