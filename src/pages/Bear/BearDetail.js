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
                <View animation={"fadeIn"} delay={10} style={styles.mainStyle}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity
                            onPress={() => this.props.dispatch(setParam(Param.BEAR_DETAIL, false))}
                            style={styles.closeButtonContainer}>
                            <Text style={styles.closeButtonText}>
                                {'Close'}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.contentContainer}>
                            <View style={styles.contentDetailContainer}>
                                <Text style={styles.contentNameText}>
                                    {detail.name}
                                </Text>
                                <Text style={styles.contentDetailText}>
                                    {detail.tagline}
                                </Text>
                                <Text style={styles.contentDetailText}>
                                    {detail.description}
                                </Text>
                                {detail.food_pairing.map((item, index) => (
                                    <Text style={styles.contentDetailText}>
                                        {index + 1 + '-' + item}
                                    </Text>
                                ))}
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.imageStyle}
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