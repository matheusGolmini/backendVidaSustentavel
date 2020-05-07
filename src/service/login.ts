import { IUser } from '../model/user'

export function validateUser(user?: IUser){
    if(user){
        return {user}
    }
    return {"error": "User not found"}
}