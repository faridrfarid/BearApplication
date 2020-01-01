import {AsyncStorage} from "react-native";
import {Platform} from "react-native";
export function set(key, value, ret) {
    AsyncStorage.setItem(key, JSON.stringify(value), (r) => {
        if (r === null) {
            {
                ret(r)
            }
        } else {
            {
                ret(r)
            }
        }
    });
}
export function merge(key, value, ret) {
    if (Platform.OS === 'ios') {
        get(key, (ret2) => {
            let test = {...ret2, ...value}
            set(key, test, ret)
        })
    } else {
        merge2(key, value, ret)
    }
}
export function merge2(key, value, ret) {
    AsyncStorage.mergeItem(key,JSON.stringify(value), (r) => {
        if (r === null) {
            {
                ret(r)
            }
        } else {
            console.log(r)
            {
                ret(r)
            }
        }
    });
}
export function get(key, ret) {
    AsyncStorage.getItem(key, (err, result) => {
        err ? console.log(err) : null
        if (result === null) {
            {
                ret(result)
            }
        } else {
            {
                ret(JSON.parse(result))
            }
        }
    })
}
export function clear(ret) {
    AsyncStorage.clear(ret)
}
export function clearItem(key ,ret) {
    AsyncStorage.removeItem(key ,(r)=>{
        ret(r)
    });
}
