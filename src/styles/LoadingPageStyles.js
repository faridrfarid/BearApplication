import { StyleSheet } from "react-native";
import * as Param from '../actions/Param'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: Param.Z_INDEX.loading,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextContainer: {
        position: 'absolute', bottom: 10, alignSelf: 'center', marginBottom: 30
    },
    bottomText: {
        color: Param.COLOR.white
    },
    topText: {
        color: Param.COLOR.white,
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
        fontSize: 30
    },
    logoStyle: {
        width: 220,
        height: 220,
        resizeMode: 'contain'
    },
});


export { styles }