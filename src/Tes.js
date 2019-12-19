import React, { Component } from 'react'
import { axios, verify } from "./component/helpers";



export default class Tes extends Component {
    componentDidMount = () => {
        axios()
            .get(`/users`)
            .then(response => {
                console.log(response)
                
                
            })
            console.log(verify());
            
           
    };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
