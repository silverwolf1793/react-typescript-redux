
import { REGISTER_STUDENT } from '../../actions/actions'
import {StudentActionTypes} from './interfaces/iAction'

import { iStudent } from './interfaces/iStudent';
import { register } from './register/register';

const reducerStudentsDefaultState: iStudent[] = [];

const studentReducer = (
    state = reducerStudentsDefaultState,
    action: StudentActionTypes
): iStudent[] =>{
    switch (action.type) {
        case REGISTER_STUDENT:
          return register(state,action);
        default:
          return state;
      }
    
}

export {studentReducer}