import React, { Component } from 'react';
import { connect } from "react-redux";
import { setParam } from "BearApplication/src/actions/action";
import RNShake from 'react-native-shake';
import * as Param from "../../actions/Param";
import { Text, View } from 'react-native-animatable'
import { Image, TouchableOpacity } from "react-native"
import BearApis from '../../api/BearApis'
import { styles } from 'BearApplication/src/styles/BearPageStyles.js'

class BearList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BeersList: []
        }
        this.bearServices = new BearApis()
    }

    componentDidMount() {
        this.bearServices.getAllBears((response) => {
            console.log(response)
            this.setState({ BeersList: response })
        })
    }

    UNSAFE_componentWillMount() {
        RNShake.addEventListener('ShakeEvent', () => {
            //shake function
        });
    }



    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }


    render() {
        return (
            <View style={styles.container}>
            </View>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(BearList)