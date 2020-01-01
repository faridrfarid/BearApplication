import { StyleSheet } from "react-native";
import * as Param from '../actions/Param'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: Param.Z_INDEX.bearDetail,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    mainStyle: {
        alignSelf: 'center',
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButtonContainer: {
        backgroundColor: Param.COLOR.red,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    closeButtonText: {
        color: Param.COLOR.black,
        fontSize: 16,
        padding: 10
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Param.COLOR.black,
        borderRadius: 20,
        padding: 15
    },
    contentDetailContainer: {
        alignSelf: 'flex-start',
        maxWidth: '70%'
    },
    contentNameText: {
        color: Param.COLOR.white,
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left'
    },
    contentDetailText: {
        color: Param.COLOR.white,
        fontSize: 13,
        marginBottom: 5,
        textAlign: 'left'
    },
    imageContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: Param.COLOR.white,
        marginVertical: 10
    },
    imageStyle: {
        width: 80, 
        height: 80,
         borderRadius: 10,
          resizeMode: 'contain'
    }
});


export { styles }