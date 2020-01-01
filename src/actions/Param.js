const PARAM = 'PARAM_'
const PAGE = 'PAGE_'
const SERVER = ''
module.exports = {
    //STATIC PARAMETERS
    SERVER: SERVER,
    PARAM: PARAM,
    PAGE: PAGE,
    COLOR: {
        black: '#000',
        blackLite: '#0a1826',
        redMain: '#b70249',
        white: 'white',
        mainGreen: '#009864',
        silverBg: '#eff4f7',
    },



    NETWORK_APIS: {
        TEST: {
            test: 'test',
        },
    },
    Z_INDEX: {
        bearList: 100,
        loading: 1000000,
    },


    //DYNAMIC PARAMETERS
    WIDTH: PARAM + 'WIDTH',
    HEIGHT: PARAM + 'HEIGHT',




    //PAGES PARAMETERS
    LOADING: PAGE + 'LOADING',
    BEAR_LIST: PAGE + 'BEAR_LIST',


}