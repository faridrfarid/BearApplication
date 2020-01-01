export function setParam(key, value) {
    console.log('param : ', key, 'value : ', value)
    return (dispatch) => {
        dispatch({type: key, value: value})
    }
}
