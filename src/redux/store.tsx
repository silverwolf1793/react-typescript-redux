import { createStore, combineReducers } from "redux";
import { studentReducer } from "./reducers/students/configureStudents";

export const rootReducer = combineReducers({
    students: studentReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer
);