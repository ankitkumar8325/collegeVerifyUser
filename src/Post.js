import React, { Component } from 'react'
import './post.css'
import menuIcon from './images/menu.svg'

export class Post extends Component {
    state = {
             menuOpen: false,
            userName: "Ankit Kumar Porwal",
            userImgUrl: "./images/logo.jpg",
            postImgUrl: "./images/logo.jpg",
            postHeading: "Biggest party of the yaer",
            postDate: "30-08-2019",
            postTime: "02:00 PM",
            postContent: "Having you in the party will be a great pleasure for me. I hope you’ll have the time to be with us on [date]. Looking forward to seeing you <br>            We have decided to throw a joyful party on [date]. You are cordially invited to share the joy with us. Your presence means a lot to us!",
            isEvent: true,
            eventDate : "00-00-00",
            eventTtime : "08:00 AM"
       }
    showMenu = () => {
        this.setState( (prevState) => ({menuOpen: !prevState.menuOpen}))
            }
    componentDidMount() {
        const post = this.props.post;
        //console.log(this.props.post);
        this.setState(post);


        //console.log(this.state);
    }
    render() {
        const menu = <div className="options">
        <ul>
            <li>Edit</li>
            <li>Delete</li>
        </ul>
    </div>;

        const image = this.state.postImgUrl;
        return (
            <div className="postBox">
                <div className="postHeader">
                    <div className="burger">
                    {/* menu */}
                    <img src={menuIcon} alt="menu" className="menuIcon" onClick={this.showMenu}/>
                    {this.state.menuOpen ? menu : null}
                    </div>
                    <div className="postUserImageContainer">
                    <img src={require(`${this.state.userImgUrl}`)} alt="imageIcon" className="postUserImage"/>
                    </div>
                    <div className="postUserName"> {this.state.userName} </div>
                    <div className="postDate"> {this.state.postDate} </div>
                    <div className="postTime"> {this.state.postTime} </div>
                </div>
                <div className="postContent">
                    <img src={require(`${this.state.postImgUrl}`)} alt="imageIcon" className="postImage"/>
                    <div className="postText">
                        <div className="postHeading">{this.state.postHeading}</div>
                        {this.state.postContent}
                    </div>
                </div>
                <div className="postFooter">
                    <span className="like footerButton"> LIKE </span>
                    { (this.state.isEvent) ? 
                        <div className="eventDetails">
                            <span className="interested footerButton"> INTERESTED </span>
                            <span className="going footerButton"> GOING </span>
                        </div>
                     : 
                        null
                    
                    }
                    
                </div>
             </div>
        )
    }
}

export default Post
