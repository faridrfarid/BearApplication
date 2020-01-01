import React, { Component } from 'react';
import {
    StatusBar,
    Dimensions,
    BackHandler,
    Animated,
    Easing
} from 'react-native';
import { View } from 'react-native-animatable'
import { connect } from "react-redux";
import { setParam } from "BearApplication/src/actions/action";
import * as Param from "BearApplication/src/actions/Param";
import Toast from "react-native-simple-toast";
import Loading from 'BearApplication/src/actions/Loading'

//Bear Pages
import BearList from '../Bear/BearList'


const { height, width } = Dimensions.get('window')
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.lastBackButtonPress = null
        this.backButtonListener = null
        props.dispatch(setParam(Param.LOADING, true))
        props.dispatch(setParam(Param.WIDTH, width))
        props.dispatch(setParam(Param.HEIGHT, height))
    }

    onBackPress() {
        let mappedKeyAndPages = []
        for (key in this.props.pages) {
            let mapped = {
                key: key,
                value: this.props.pages[key]
            }
            mappedKeyAndPages.push(mapped)
        }
        let i = mappedKeyAndPages.length - 1;
        for (i; i >= 0; i--) {
            if (mappedKeyAndPages[i].value === true) {
                if (mappedKeyAndPages[i].key === "BEAR_LIST") {
                    if (this.lastBackButtonPress + 2000 >= new Date().getTime()) {
                        BackHandler.exitApp()
                    }
                    Toast.show('Press two times to exit', Toast.SHORT);
                    this.lastBackButtonPress = new Date().getTime();
                    return true;
                }
                else {
                    this.props.dispatch(setParam(mappedKeyAndPages[i].key, false))
                    break;
                }
            }
        }
        return true
    }

    UNSAFE_componentWillMount() {
        this.backButtonListener = BackHandler.addEventListener('hardwareButtonPress', () =>
            this.onBackPress());
    }
    componentWillUnmount() {
        this.backButtonListener.remove();
    }


    componentDidMount() {
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={Param.COLOR.redMain} />
                <View style={{ position: 'absolute', zIndex: 1, width: width, height: height }}>
                    {this.props.pages[Param.BEAR_LIST] && <BearList></BearList>}
                    {this.props.pages[Param.LOADING] && <Loading></Loading>}
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
        pages: state.param.pages
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)