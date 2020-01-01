import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {Provider} from 'react-redux'
import store from "./src/actions/ReduxStore";
import Main from './src/pages/Main/Main'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Main/>
                </View>
            </Provider>
        );
    }
}
