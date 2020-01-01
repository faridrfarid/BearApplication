import BaseDomainService from '../services/BaseDomainService';
import * as  Param from '../actions/Param'

export default class AuthApis
{
    constructor() {
        this.services = new BaseDomainService()
    }

    handleError(data){
        console.log(data)
    }
}