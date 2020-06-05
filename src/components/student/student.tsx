import React from 'react'
import '../../styles/main.scss'
import { store } from '../../redux/store'

export default class Student extends React.Component{

    state:any = {
        data: (<tbody><tr><td>Loading</td></tr></tbody>)
    }
    constructor(props:any){
        super(props)
        this.populateTable = this.populateTable.bind(this)
    }

    componentDidMount(){
        const param:any = this.props
        const data = store.getState().students[param.match.params.id]
        
        this.setState({data: this.populateTable(data)})
    }

    populateTable(data:any){
            return (
                <tbody>
                    <tr>
                        <td className="title">First Name</td>
                        <td>{data.firstName}</td>
                    </tr>
                        <tr>
                        <td className="title">Second Name</td>
                        <td>{data.secondName}</td>
                    </tr>
                    <tr>
                        <td className="title">Street Name</td>
                        <td>{data.streetName}</td>
                    </tr>
                    <tr>
                        <td className="title">Street Number</td>
                        <td>{data.streetNumber}</td>
                    </tr>
                    <tr>
                        <td className="title">Phone Number</td>
                        <td>{data.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td className="title">GPA</td>
                        <td>{data.gpa}</td>
                    </tr>
                </tbody>
            )
    }

    render(){
        return (
            <div className="student">
                <div className="photo"></div>
                <div>
                    <table>
                        {this.state.data}
                    </table>
                </div>
            </div>
        )
    }
}