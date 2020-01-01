import BaseDomainService from '../services/BaseDomainService';
import * as  Param from '../actions/Param'

export default class AuthApis {
    constructor() {
        this.services = new BaseDomainService()
    }

    handleError(data) {
        console.log(data)
    }

    getAllBears(callback) {
        this.services.get(Param.NETWORK_APIS.BEARS.get, (response) => {
            if (response.status === 200) {
                callback(response.data.slice(0, 9))
            }
            else {
                this.handleError(response)
            }
        })
    }
}