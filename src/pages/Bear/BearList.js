import React, { Component } from 'react';
import { connect } from "react-redux";
import { setParam } from "BearApplication/src/actions/action";
import RNShake from 'react-native-shake';
import * as Param from "../../actions/Param";
import { Text, View } from 'react-native-animatable'
import { Image, TouchableOpacity } from "react-native"
import BearApis from '../../api/BearApis'
import { styles } from 'BearApplication/src/styles/BearPageStyles.js'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
var ScrollableTabView = require('../../utilities/react-native-scrollable-tab-view/index');
var sortBy = require('sort-by')

class BearList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BeersList: [],
            sortFunction: 'abv',
            headerButtons: [
                {
                    icon: <Feather name="coffee" size={25} color={Param.COLOR.white} />,
                    selected: true
                },
                {
                    icon: <Ionicons name="ios-restaurant" size={25} color={Param.COLOR.white} />,
                    selected: false
                },
                {
                    icon: <Feather name="percent" size={25} color={Param.COLOR.white} />,
                    selected: false
                },
                {
                    icon: <Feather name="search" size={25} color={Param.COLOR.white} />,
                    selected: false
                },
            ]
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
                <View style={{ width: '100%', alignItems: 'flex-end', flexDirection: 'row', height: 100, backgroundColor: Param.COLOR.red }}>
                    {this.state.headerButtons.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                let items = this.state.headerButtons
                                items.find(x => x.selected === true).selected = false
                                items[index].selected = true
                                this.setState({ headerButtons: items })
                            }}
                            style={{ bottom: 0, justifyContent: 'center', alignItems: 'center', width: this.props.width / 4, height: 50, borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: item.selected ? Param.COLOR.black : 'transparent' }} key={index}>
                            {item.icon}
                        </TouchableOpacity>
                    ))}
                </View>
                {this.state.headerButtons[0].selected && <ScrollableTabView
                    tabBarTextStyle={{ color: Param.COLOR.white, fontSize: 15, marginTop: 10 }}
                    tabBarBackgroundColor={Param.COLOR.black}
                    style={{ backgroundColor: Param.COLOR.white }}
                    initialPage={2}
                    tabBarUnderlineStyle={{ backgroundColor: Param.COLOR.black }}
                >
                    <View tabLabel="ALL" style={styles.itemContainerMain}>
                        {this.state.BeersList
                            .sort(sortBy(this.state.sortFunction))
                            .map((item, index) => (
                                <View
                                    animation={"bounceInLeft"}
                                    delay={100 + index * 100}
                                    key={index} style={{ width: '30%' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL, true))
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL_ITEM, item))
                                        }}
                                    >
                                        <View style={styles.itemContainer}>
                                            <Image style={styles.itemImageStyle}
                                                source={{ uri: item.image_url }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.nameText}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.abvText}>
                                        {item.abv}
                                    </Text>
                                </View>
                            ))}
                    </View>
                    <View tabLabel="PIZZA" style={styles.itemContainerMain}>
                        {this.state.BeersList
                            .sort(sortBy(this.state.sortFunction))
                            .map((item, index) => (
                                <View
                                    animation={"bounceInLeft"}
                                    delay={100 + index * 100}
                                    key={index} style={{ width: '30%' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL, true))
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL_ITEM, item))
                                        }}
                                    >
                                        <View style={styles.itemContainer}>
                                            <Image style={styles.itemImageStyle}
                                                source={{ uri: item.image_url }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.nameText}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.abvText}>
                                        {item.abv}
                                    </Text>
                                </View>
                            ))}
                    </View>
                    <View tabLabel="STEAK" style={styles.itemContainerMain}>
                        {this.state.BeersList
                            .sort(sortBy(this.state.sortFunction))
                            .map((item, index) => (
                                <View
                                    animation={"bounceInLeft"}
                                    delay={100 + index * 100}
                                    key={index} style={{ width: '30%' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL, true))
                                            this.props.dispatch(setParam(Param.BEAR_DETAIL_ITEM, item))
                                        }}
                                    >
                                        <View style={styles.itemContainer}>
                                            <Image style={styles.itemImageStyle}
                                                source={{ uri: item.image_url }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.nameText}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.abvText}>
                                        {item.abv}
                                    </Text>
                                </View>
                            ))}
                    </View>
                </ScrollableTabView>}
                {this.state.headerButtons[1].selected && <View style={{ height : '100%' ,justifyContent : 'center' , alignItems : 'center'}}>
                    <Text style={{ color: Param.COLOR.black }}>
                        Show Extra Things here !
                    </Text>
                </View>}
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