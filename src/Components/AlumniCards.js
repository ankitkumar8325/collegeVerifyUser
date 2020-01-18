import React, { Component } from 'react'
import AlumniCard from './AlumniCard'
import AlumniSuggestionCard from './AlumniSuggestionCard'

export class AlumniCards extends Component {
    state={
        type:"verified",
        cid:1,
        alumnis : [
            {
                aName: "Vaibhav Kumar",
                aUid : 1,
                aEmail: "a@b.com",
                aMobile: "00000000000",
                aPassYear: "26-06-1999"
            },
            {
                aName: "Virat Kumar",
                aUid : 2,
                aEmail: "c@d.com",
                aMobile: "1111111111",
                aPassYear: "30-06-1999"
            },
            {
                aName: "Virat Kumar",
                aUid : 2,
                aEmail: "c@d.com",
                aMobile: "1111111111",
                aPassYear: "30-06-1999"
            },
            {
                aName: "Virat Kumar",
                aUid : 2,
                aEmail: "c@d.com",
                aMobile: "1111111111",
                aPassYear: "30-06-1999"
            },
            {
                aName: "Virat Kumar",
                aUid : 2,
                aEmail: "c@d.com",
                aMobile: "1111111111",
                aPassYear: "30-06-1999"
            },
            {
                aName: "Virat Kumar",
                aUid : 2,
                aEmail: "c@d.com",
                aMobile: "1111111111",
                aPassYear: "30-06-1999"
            }

        ]
    }

    componentDidMount() {
        const type = this.props.type;
        const cid = this.props.cid;
        const filter = this.props.filter;
        console.log(type);
        //get all alumnis


    }
    render() {
        const { type,cid } = this.props;
        return (
            <div>
            {
            this.state.alumnis.map(alumni => {
                return (
                    <AlumniCard type={type} alumni={alumni} key={Math.random()} />
                )
            })}
            <AlumniSuggestionCard />
            </div>
        )
    }
}

export default AlumniCards
