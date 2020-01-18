import React, { Component } from 'react'
import '../alumniCard.css'
import image from '../images/postImage.jpg'

export class AlumniCard extends Component {
    state = {
        aName: "Ankit Kumar",
        aUid: 1,
        aEmail: "a@b.com",
        aMobile: "00000000000",
        aPassYear: "26-06-1999"
    }
    componentDidMount() {
        const alumni = this.props.alumni;
        //console.log(this.props.alumni);
        this.setState(alumni);
    }
    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        console.log(this.props.type);
        return (
            <div className={'alumniCard ' + this.props.type + 'Alumni'}>
                <img src={image} alt="alumniImage" className="alumniImage" />
                <div className="alumniDetail">
                    <div>
                    <div className="aName"> Name: {this.state.aName} </div>
                    <div className="aUid">College Id: {this.state.aUid} </div>
                    <div className="aPassYear">Pass Year: {this.state.aPassYear} </div>
                    <div className="aEmail">Email: {this.state.aEmail} </div>
                    </div>
                </div>
        
                
            </div>
        )
    }
}

export default AlumniCard
