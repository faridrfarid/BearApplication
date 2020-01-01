import React, { Component } from 'react';
import { connect } from "react-redux";
import { setParam } from "BearApplication/src/actions/action";
import RNShake from 'react-native-shake';
import * as Param from "../../actions/Param";
import { Text, View } from 'react-native-animatable'
import { Image, TouchableOpacity } from "react-native"
import BearApis from '../../api/BearApis'
import { styles } from 'BearApplication/src/styles/BearPageStyles.js'
var sortBy = require('sort-by')

class BearList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BeersList: [],
            sortFunction: 'abv'
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
            console.log('shaked')
            this.sortFunction()
        });
    }


    sortFunction() {
        if (this.state.sortFunction === 'abv') {
            this.setState({ sortFunction: '-abv' })
        }
        else if (this.state.sortFunction === '-abv') {
            this.setState({ sortFunction: 'name' })
        }
        else if (this.state.sortFunction === 'name') {
            this.setState({ sortFunction: '-name' })
        }
        else if (this.state.sortFunction === '-name') {
            this.setState({ sortFunction: 'abv' })
        }
    }



    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.BeersList
                        .sort(sortBy(this.state.sortFunction))
                        .map((item, index) => (
                            <View
                                animation={"bounceInLeft"}
                                delay={100 + index * 100}
                                key={index} style={{ width: '30%' }}>
                                <View style={{ height: 100, borderRadius: 10, borderColor: Param.COLOR.black, borderWidth: 1 , marginVertical : 10 }}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 10, resizeMode: 'cover' }}
                                        source={{ uri: item.image_url }} />
                                </View>
                                <Text style={{ fontSize: 15, color: Param.COLOR.black, marginTop: 10, textAlign: 'center' }}>
                                    {item.name}
                                </Text>
                                <Text style={{ fontSize: 14, color: Param.COLOR.black, marginTop: 5, textAlign: 'center' }}>
                                    {item.abv}
                                </Text>
                            </View>
                        ))}
                </View>
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