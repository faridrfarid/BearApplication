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
});


export { styles }