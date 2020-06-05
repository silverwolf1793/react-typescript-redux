import React from 'react'
import '../../styles/main.scss'
import { store } from '../../redux/store'

interface iState {
    data: any
}

export default class Consult extends React.Component{

    state:iState = {
        data: (<tr><td colSpan={6} className="loading">Loading</td></tr>)
    }
    constructor(props:any){
        super(props)
        this.student = this.student.bind(this)
        this.mapTable = this.mapTable.bind(this)
    }
    student(e:any){
        e.preventDefault();
        let test:any = this.props
        test.history.push("/student/"+e.target.parentNode.getAttribute('data-tag'))
    }

    componentDidMount(){
        const db = store.getState().students
        this.setState({data: this.mapTable(db)})
        
    }

    mapTable(data:any){
        
        return data.map((elem:any,key:number)=>{
            return (
                <tr onClick={this.student} data-tag={key} key={key}>
                    <td className="name">{elem.firstName}</td>
                    <td className="name">{elem.secondName}</td>
                    <td>{elem.streetNumber}</td>
                    <td>{elem.streetName}</td>
                    <td>{elem.phoneNumber}</td>
                    <td>{elem.gpa}</td>
                </tr>
            )
        })
        
    }

    render(){
        const data:any = this.state.data
        return (
            <div className="consult">
                <table>
                    <thead>
                        <tr>
                            <td>FIRST NAME</td>
                            <td>SECOND NAME</td>
                            <td>STREET NUMBER</td>
                            <td>STREET NAME</td>
                            <td>PHONE NUMBER</td>
                            <td>GPA</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}