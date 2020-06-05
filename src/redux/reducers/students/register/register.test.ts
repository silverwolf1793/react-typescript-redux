import { register } from "./register";
import { dummyState, dummyAction, dummyResponse } from "../testData/dummys";

test('formats correctly the state', () => {
    expect(typeof register).toBe('function')

    
    expect(
        register(dummyState,dummyAction)
    ).toEqual(dummyResponse)

    expect(
        register([],dummyAction)
    ).toEqual([dummyAction.payload])

});
