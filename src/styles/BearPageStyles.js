import { StyleSheet } from "react-native";
import * as Param from '../actions/Param'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: Param.Z_INDEX.bearList,
        backgroundColor: Param.COLOR.silverBg,
    },
    abvText: {
        fontSize: 14,
        color: Param.COLOR.black,
        marginTop: 5,
        textAlign: 'center'
    },
    nameText: {
        fontSize: 15,
        color: Param.COLOR.black,
        textAlign: 'center'
    },
    itemImageStyle: {
        width: '100%',
        height: '90%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    itemContainer: {
        height: 100,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: Param.COLOR.black,
        borderWidth: 1,
        marginVertical: 10
    },
    itemContainerMain:{
        width: '100%',
         justifyContent: 'space-around',
          flexDirection: 'row',
           flexWrap: 'wrap'
    }
});


export { styles }