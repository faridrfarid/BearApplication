/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { Text, View, Image } from 'react-native-animatable'
import { connect } from "react-redux";
import * as Param from "./Param";
import { styles } from 'BearApplication/src/styles/LoadingPageStyles.js'
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    componentDidMount() {

    }


    render() {

        return (
            <View animation={'fadeIn'}
                duration={400}
                delay={50}
                style={styles.container}>
                <StatusBar backgroundColor={'rgba(0,0,0,0.9)'} />
                <Text style={styles.topText}>
                    {'Bear Application'}
                </Text>
                <View style={styles.bottomTextContainer}>
                    <ActivityIndicator
                        color={Param.COLOR.redMain}
                        size={'large'}
                        style={{
                            margin: 10,
                        }} />
                    <Text style={[styles.bottomText, { fontSize: this.props.width / 20 }]}>
                        {'Please wait ...'}
                    </Text>
                </View>
            </View>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pages: state.param.pages,
        width: state.param[Param.WIDTH],
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)