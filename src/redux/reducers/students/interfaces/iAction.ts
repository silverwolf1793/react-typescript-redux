

import { iStudent } from "./iStudent";
import { REGISTER_STUDENT } from "../../../actions/actions";

export interface iResgisterStudent {
    type: typeof REGISTER_STUDENT,
    payload: iStudent
}

export type StudentActionTypes = iResgisterStudent
export type AppActions = StudentActionTypes