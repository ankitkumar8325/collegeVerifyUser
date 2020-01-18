import React, { Component } from 'react'
import './verifyOTP.css'

export class VerifyOTP extends Component {

    state = {
        token : "",
        OTP : ""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
        //console.log(this.state);
    }

    componentDidMount(){
        this.setState(
            this.props.datas
        );
        console.log(this.state);
    }

    render() {
        const datas = this.props.datas;
        
        return (
            <div className="editpage otp-bg-model">
                <div className="otp-model-content">
                    <p className="otpHeading">Hola!, You are one step away from verification</p>
                    <form>
                        <label htmlFor="otp" className="otpLabel">OTP</label>
                        <input id="otp" type="number" className="otpInput" placeholder="Enter OTP"/>
                    </form>
                    <button className="otpSubmit">Verify</button>
                </div>
            </div>
        )
    }
}

export default VerifyOTP
