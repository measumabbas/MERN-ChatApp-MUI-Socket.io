import {isValidUsername} from '6pp'
export const usernameValidator = (username)=> {
    if(!isValidUsername(username)){
        return {isValud: false,errorMessage: 'username is invalid'}
    }
}