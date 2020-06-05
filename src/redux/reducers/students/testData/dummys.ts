import { REGISTER_STUDENT } from "../../../actions/actions"
import { iResgisterStudent } from "../interfaces/iAction"
import { iStudent } from "../interfaces/iStudent"

export const dummyState:iStudent[] = [
{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
},
{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
},{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
}]

export const dummyAction:iResgisterStudent = {
    type: REGISTER_STUDENT,
    payload:{
        "firstName": "Eric Saul",
        "secondName": "Lopez Barragán",
        "streetNumber": '2',
        "streetName": "gustavo baz",
        "phoneNumber": "55 1963 0823",
        "gpa": '4'
    }
}

export const dummyResponse = [
{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
},
{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa":"4"
},{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
},{
    "firstName": "Eric Saul",
    "secondName": "Lopez Barragán",
    "streetNumber": "2",
    "streetName": "gustavo baz",
    "phoneNumber": "55 1963 0823",
    "gpa": "4"
}]