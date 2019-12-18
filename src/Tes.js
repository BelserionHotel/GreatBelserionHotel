import React, { Component } from 'react'
import { axios } from "./component/helpers";


export default class Tes extends Component {
    componentDidMount = () => {
        axios()
            .get(`/users`)
            .then(response => {
                console.log(response)
                
                
            })
           
    };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
