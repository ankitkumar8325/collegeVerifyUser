import React, { Component } from 'react'
import EditDetails from './EditDetails'

export class Details extends Component {
    state = {
        datas: {
            uid: 1,
            name: "Name SurName",
            email: "abcdef@ghijk.com",
            college: "ABCD college",
            yearPass: 2000,
            company: "XYZ company",
            jobLocation: "That City",
            clubs: ["Club A", "Club B"],
            interests: ["Sing", "Dance"]
        }
    }

    render() {

        const clubList = this.state.datas.clubs.map(club => {
            return (
                <span key={Math.random()} > {club} </span>
            );
        });
        const interestList = this.state.datas.interests.map(i => {
            return ( <span key={Math.random()} > {i} </span>
                );
            })
    
        return ( <div className="Details container center"key={this.state.key} >

                        <h3> There is lot to know about {this.state.datas.name} </h3> 
                        <div> Name: {this.state.datas.name} </div>
                        <div > Email: {this.state.datas.email} </div> 
                        <div > College: {this.state.datas.college} </div>
                        <div > Year Passed: {this.state.datas.yearPass} </div> 
                        <div > Company: {this.state.datas.company} </div> 
                        <div > Job location: {this.state.datas.jobLocation} </div> 
                        <div > Clubs: {clubList} </div>
                        <div > Interest: {interestList} </div>
                                                
                        <EditDetails datas={this.state.datas} handleCloseButton={this.props.handleCloseButton}/>
                    </div>
                )}}
                                                
export default Details