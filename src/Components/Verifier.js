import React, { Component } from 'react'
import AlumniCards from './AlumniCards'
import '../verifier.css'  


export class Verifier extends Component {
    state={
        type:"verified",
        cid: 3,
        colleges : [
            "NIT Patna",
            "IIT Patna"
        ],
        filter : {
            college:"",
            year:"",
            branch:""
        }
    }
  
    componentDidMount() {
        console.log('mounted');
        //console.log(this.props);
        //console.log(this.props.match.params);
        const cid = this.props.match.params.cid;
        //console.log(cid);
        this.setState({
            cid
        });
    }
    componentDidUpdate(){
        console.log(this.state.cid);
    }
    handleClick = (e) => {
        this.setState({
            type: e.target.id
        });
        console.log("value is: ",e.target.id);
    }

    handleChange = (e) => {
        const filter = this.state.filter;
        filter[`${e.target.id}`] = e.target.value;
       
        console.log(filter);
        
    }

    render() {
        return (
            <div className="collegeVerifier">
                {/*Button section*/}
                
                <div className="collegeFilter">
                    <div className="collegeFilterHeading">Filter</div>
                        <section className="collegeFilterContainer">
                        <label htmlFor="college">College : </label>
                            <input type="text" name="college" id="college" placeholder="College Name" onChange={this.handleChange}/>
                            <label htmlFor="year">Passout Year : </label>
                            <input type="text" name="year" id="year" placeholder="Passout Year" onChange={this.handleChange}/>
                            <label htmlFor="Branch">Branch : </label>
                            <input type="text" name="branch" id="branch" placeholder="Branch Name" onChange={this.handleChange}/>
                        </section>
                    <div className="collegeFilterText">*Leave empty to search from all</div>
                </div>

                <section className="collegeButtonContainer">
                    <div className="verifiedButton" id="verified" onClick={this.handleClick}>
                        Verified
                    </div>
                    <div className="toBeVerifiedButton" id="toBeVerified" onClick={this.handleClick}>
                        To be verified
                    </div>
                    <div className="rejectedButton" id="rejected" onClick={this.handleClick}>
                        Rejected
                    </div>
                    <div className="allButton" id="all" onClick={this.handleClick}>
                        All
                    </div>
                </section>

                <AlumniCards type={this.state.type} cid={this.state.cid} filter={this.state.filter} />
            </div>
        )}
}
export default Verifier
