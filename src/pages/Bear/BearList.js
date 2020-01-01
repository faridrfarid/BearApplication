import React, { Component } from 'react';
import { connect } from "react-redux";
import { setParam } from "BearApplication/src/actions/action";
import * as Param from "../../actions/Param";
import { Text, View } from 'react-native-animatable'
import { Image, TouchableOpacity } from "react-native"
import { styles } from 'BearApplication/src/styles/BearPageStyles.js'
class BearList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    componentWillMount() {
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