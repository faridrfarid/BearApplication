const PARAM = 'PARAM_'
const PAGE = 'PAGE_'
const SERVER = 'https://api.punkapi.com/v2/'
module.exports = {
    //STATIC PARAMETERS
    SERVER: SERVER,
    PARAM: PARAM,
    PAGE: PAGE,
    COLOR: {
        black: '#363537',
        red: '#cb1c00',
        white: 'white',
    },



    NETWORK_APIS: {
        BEARS: {
            get: SERVER + 'beers',
        },
    },
    Z_INDEX: {
        bearList: 100,
        bearDetail: 200,
        loading: 1000000,
    },


    //DYNAMIC PARAMETERS
    WIDTH: PARAM + 'WIDTH',
    HEIGHT: PARAM + 'HEIGHT',
    BEAR_DETAIL_ITEM: PARAM + 'BEAR_DETAIL_ITEM',




    //PAGES PARAMETERS
    LOADING: PAGE + 'LOADING',
    BEAR_LIST: PAGE + 'BEAR_LIST',
    BEAR_DETAIL: PAGE + 'BEAR_DETAIL',


}