import React, { Component } from 'react';
import { connect } from "react-redux";
import * as Param from "../../actions/Param";
import { setParam } from "BearApplication/src/actions/action";
import { Text, View } from 'react-native-animatable'
import { Image, TouchableOpacity } from "react-native"
import { styles } from 'BearApplication/src/styles/BearDetailPageStyles.js'

class BearDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const { detail } = this.props
        return (
            <View style={styles.container}>
                <View animation={"fadeIn"} delay={10} style={{ alignSelf: 'center', width: '90%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity
                            onPress={() => this.props.dispatch(setParam(Param.BEAR_DETAIL, false))}
                            style={{ backgroundColor: Param.COLOR.red, borderRadius: 20, alignSelf: 'flex-start', marginBottom: 10 }}>
                            <Text style={{ color: Param.COLOR.black, fontSize: 16, padding: 10 }}>
                                {'Close'}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' , justifyContent : 'space-between', backgroundColor: Param.COLOR.black, borderRadius: 20, padding: 15 }}>
                            <View style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                                <Text style={{ color: Param.COLOR.white, fontSize: 16, marginBottom: 5, textAlign: 'left' }}>
                                    {detail.name}
                                </Text>
                                <Text style={{ color: Param.COLOR.white, fontSize: 13, marginBottom : 5, textAlign: 'left' }}>
                                    {detail.tagline}
                                </Text>
                                <Text style={{ color: Param.COLOR.white, fontSize: 13, marginBottom : 5, textAlign: 'left' }}>
                                    {detail.description}
                                </Text>
                                {detail.food_pairing.map((item, index) => (
                                    <Text style={{ color: Param.COLOR.white, fontSize: 13 , marginBottom : 5, textAlign: 'left' }}>
                                        {index + 1 + '-' + item}
                                    </Text>
                                ))}
                            </View>
                            <View style={{ width: 80, height: 80, justifyContent: 'center', borderRadius: 10, backgroundColor: Param.COLOR.white, marginVertical: 10 }}>
                                <Image style={{ width: 80, height: 80, borderRadius: 10, resizeMode: 'contain' }}
                                    source={{ uri: detail.image_url }} />
                            </View>
                        </View>
                    </View>
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
        detail: state.param[Param.BEAR_DETAIL_ITEM],
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BearDetail)