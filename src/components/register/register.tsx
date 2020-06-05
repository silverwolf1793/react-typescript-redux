import React from 'react'
import '../../styles/main.scss'
import { store } from '../../redux/store'
import { iStudent } from '../../redux/reducers/students/interfaces/iStudent'
import { REGISTER_STUDENT } from '../../redux/actions/actions'

interface iState{
    student:iStudent
}


class Register extends React.Component{

    state:iState = {
        student: {
            firstName: '',
            secondName: '',
            streetNumber: '',
            streetName: '',
            phoneNumber: '',
            gpa: ''
        }
    }
 
    constructor(props?:any){
        super(props)
        this.updateInputValue = this.updateInputValue.bind(this)
        this.submit = this.submit.bind(this)
    }

    updateInputValue(e:any){
        let student:any = this.state.student
        let input:string = e.target.getAttribute('data-tag')

        if(e !== undefined && e.target !== undefined)
            student[input] = e.target.value
        
        this.setState(student)
    }

    submit(e:any){
        e.preventDefault();
        const student:iStudent = this.state.student

        store.dispatch({
            type: REGISTER_STUDENT,
            payload:student
        })

        this.setState({
            student:{
                firstName: '',
                secondName: '',
                streetNumber: '',
                streetName: '',
                phoneNumber: '',
                gpa: ''
            }})
    }

    render(){ 
        const student = this.state.student
        return (
            <div className="register">
                <form onSubmit={this.submit}>
                    <input value={student.firstName} onChange={e => this.updateInputValue(e)} data-tag="firstName" type="text" placeholder="First Name"></input>
                    <input value={student.secondName} onChange={e => this.updateInputValue(e)} data-tag="secondName" type="text" placeholder="Second Name"></input>
                    <input value={student.streetNumber} onChange={e => this.updateInputValue(e)} data-tag="streetNumber" type="number" placeholder="Street Number"></input>
                    <input value={student.streetName} onChange={e => this.updateInputValue(e)} data-tag="streetName" type="text" placeholder="Street Name"></input>
                    <input value={student.phoneNumber} onChange={e => this.updateInputValue(e)} data-tag="phoneNumber" type="number" placeholder="Phone Number"></input>
                    <input value={student.gpa} onChange={e => this.updateInputValue(e)} data-tag="gpa" type="number" placeholder="GPA"></input>
                    <button> &#10003; Save</button>
                </form>
            </div>
        )
    }
}

export default Register