import React, { Component } from 'react'
import '../alumniSuggestionCard.css'
import image from '../images/postImage3.jpg'



export class AlumniCard extends Component {
    state = {
        aName: "Ankit Kumar",
        aUid: 1,
        aEmail: "a@b.com",
        aMobile: "00000000000",
        aPassYear: "26-06-1999",
        aCompany: "Google"
    }
    componentDidMount() {
        //const alumni = this.props.alumni;
        //console.log(this.props.alumni);
        //this.setState(alumni);
    }
        componentDidUpdate() {
        console.log(this.state);
}

    render() {
        console.log(this.props.type);
        return (
            <div className="alumniSuggestionCard">
                <img src={image} alt="alumniSuggestionImage" className="alumniSuggestionImage" />
                <div className="alumniSuggestionDetail">
                    <div>
                    <div className="alumniSuggestionName">{this.state.aName} </div>
                    <div className="alumniSuggestionCompany">{this.state.aCompany} </div>
                    <div className="alumniSuggestionPassYear">Passed: {this.state.aPassYear} </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlumniCard