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


    get(url, callback) {
        store.dispatch(setParam(Param.LOADING, true))
        this.api.GET(url)
            .then((response) => {
                callback(response)
                store.dispatch(setParam(Param.LOADING, false))
            })
            .catch(ex => {
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


