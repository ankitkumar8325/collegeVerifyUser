import React, { Component } from 'react'
import './popup.css'

export class EditDetails extends Component {

    state = {

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
        const handleCloseButton = this.props.handleCloseButton;

        const editForm = [];
        Object.keys(this.state).forEach(key => {
            let val = this.state[key];
            //console.log(this.state);
            editForm.push(
                <React.Fragment key={Math.random()}>
                    <label htmlFor={key} className="editLabel">{key}</label>
                    <input type="text" id={key} value={val} onChange={this.handleChange} className="editInput"/>
                </React.Fragment>

            )
        });


        return (
            <div className="editpage bg-model">
                <div className="model-content">
                    <p className="editHeading">You can freely edit anything</p>
                    <div className="close" onClick={handleCloseButton}>+</div>
                    <form>
                        {editForm}
                    </form>
                    <button className="editSubmit">Save Changes</button>
                </div>
            </div>
        )
    }
}

export default EditDetails
