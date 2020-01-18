import React, { Component } from 'react'
import './sendPost.css'

export class VerifysendPost extends Component {

    state = {
        sendPostHeading: "",
        sendPostContent : "",
        isEvent : false,
        eventDate : new Date(),
        eventVenue : ""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
        console.log(this.state);
    }

    componentDidMount(){
        this.setState(
            this.props.datas
        );
        console.log(this.state);
    }

    handleOptionChange = (event) => {
        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
    console.log(this.state.isEvent);
  }
        

      


      toggleClose = (e) => {
         document.querySelector('.sendPost-bg-model').style.visibility = 'hidden';
      }

    render() {
        const datas = this.props.datas;
        
        return (
            <div className="editpage sendPost-bg-model">
                <div className="sendPost-model-content">
                    <div className="toggleClose" onClick={this.toggleClose}>&times;</div>
                    <p className="sendPostHead">Post something and get popular! WOW</p>
                    <form method="post" action="/api/images" encType="multipart/form-data">
                        <label htmlFor="sendPostHeading" className="sendPostHeadingLabel sendPostLabel">Post Heading</label>
                        <input id="sendPostHeading" type="text" value={this.state.sendPostHeading} className="sendPostInput" placeholder="Enter Post Heading" onChange={this.handleChange}/>
                        <label htmlFor="sendPostContent" className="sendPostContentLabel sendPostLabel">Post content</label>
                        <textarea id="sendPostContent" value={this.state.sendPostContent} name="sendPostInput" placeholder="Enter Post Content" rows="5" onChange={this.handleChange}></textarea>
                        <label className="uploadImage">Upload Image : </label>
                        <input type="file" id="image" alt="Post Image" onChange={this.handleChange}/>
                        <label>
                        Is Event:
                        <input
                            name="isEvent"
                            type="checkbox"
                            checked={this.state.isEvent}
                            onChange={this.handleOptionChange} />
                        </label>
                        
                        {this.state.isEvent ?  <div className="eventDetails">
                            <label htmlFor="date" className="eventDate sendPostLabel">Date</label>
                            <input type="date" value={this.state.eventDate} name="date" id="date" onChange={this.handleChange}/>
                            <label htmlFor="venue" className="venue sendPostLabel">Venue</label>
                            <input type="text" value={this.state.sendPostHeading} name="venue" id="venue" className="eventVenue"onChange={this.handleChange}/>
                        </div>  : null }
                       
                        <button className="sendPostSubmit">Post the POST</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default VerifysendPost
