import * as Param from '../actions/Param'
import axios from 'axios'
import store from "../actions/ReduxStore";

export class API  {
    ApiUrl = Param.SERVER
    POST(url, data) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    POST_AUTH(url, data ) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    PATCH_AUTH(url, data, id) {
        return fetch(`${this.ApiUrl}/${url}/${id}/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }



    PUT(url, id, data) {
        return fetch(`${this["ApiUrl"]}/${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data)
        })
    }



    GET(url, id) {
        return fetch(`${this.ApiUrl}/${url}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    GET_AUTH(url, id) {
        return fetch(`${this.ApiUrl}/${url}/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
    
    DELETE_AUTH(url, id) {
        return fetch(`${this.ApiUrl}/${url}/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    EDIT_AUTH(url, data ,id) {
        return fetch(`${this.ApiUrl}/${url}/${id}/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data)
        })
    }

    GET_AUTH_WITHOUT_ID(url) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    GET_WITHOUT_SERVER(url) {
        return fetch(`${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
    }

    GET_ALL(url) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    GET_ALL_AUTH(url) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ` + store.getState().param[Param.TOKEN],
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }


    GET_AXIOS(url, id) {
        return axios(`${this.ApiUrl}/${url}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    GET_NO_ID(url) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    GET_NO_ID_AUTH(url) {
        return fetch(`${this.ApiUrl}/${url}/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    DELETE(url, id) {
        return axios(`${this.ApiUrl}/${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    UPLOADFORM(url, data) {
        return axios(`${this.ApiUrl}/${url}/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            data: data
        })
    }
}



