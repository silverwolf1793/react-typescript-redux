import { iResgisterStudent } from "../interfaces/iAction"
import { iStudent } from "../interfaces/iStudent"


export function register(state:iStudent[], action:iResgisterStudent){

    state[state.length] = action.payload

    return state
}