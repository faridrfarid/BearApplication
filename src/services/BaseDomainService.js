import React, { Component } from 'react';
import { API } from "./BaseApis";
import * as Param from '../actions/Param'
import { setParam } from '../actions/action';
import Toast from 'react-native-simple-toast'
import store from "../actions/ReduxStore";
export default class BaseDomainService extends Component {


    constructor(props) {
        super(props);
        this.api = new API();
    }

    post_data(url, data, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.POST(url, data)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    post_data_auth(url, data, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.POST_AUTH(url, data)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }


    patch_data_auth(url, data , id, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.PATCH_AUTH(url, data , id)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    patch_data_auth_noLoading(url, data , id, callback) {
        this.api.PATCH_AUTH(url, data , id)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    post_data_auth_noLoading(url, data, callback) {
        this.api.POST_AUTH(url, data)
            .then((response) => {
                callback(response)
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }


    get(url, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET_ALL(url)
            .then((response) => {
                callback(response.data)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_regular(url, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET_ALL_AUTH(url)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_without_server(url, callback) {
        //store.dispatch(setParam(Param.LOADING, true))
        this.api.GET_WITHOUT_SERVER(url)
            .then((response) => {
                callback(response)
                //store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_id(url, id, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET(url, id, policy)
            .then((response) => {
                callback(response.data)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_id_auth(url, id, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET_AUTH(url, id)
            .then((response) => {
                callback(response.data)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    delete_id_auth(url, id, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.DELETE_AUTH(url, id)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    edit_id_auth(url, data, id, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.PATCH_AUTH(url, data, id)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_auth_without_id(url, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET_AUTH_WITHOUT_ID(url)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
                this.handleError(ex);
            })
    }

    get_id_auth_noLoader(url, id, callback, faild) {
        this.api.GET_AUTH(url, id)
            .then((response) => {
                callback(response)
            })
            .catch(ex => {
                faild(ex)
                this.handleError(ex);
            })
    }

    handleError(ex) {
        console.log(ex)
        store.dispatch(setParam(Param.LOADING, false))
        if (ex.response !== undefined) {
            console.log('error', ex)
        }
        else {
            Toast.show("No internet connection", Toast.SHORT);
        }
    }
}


