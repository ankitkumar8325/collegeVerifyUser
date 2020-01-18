import React, { Component } from 'react'
import Post from './Post'
import './post.css'


export class Posts extends Component {
    state = {
        uid: 123,
        name: "Name",
        posts: [
            {
                userName: "Ankit Kumar Porwal",
                userImgUrl: "./images/logo.jpg",
                postImgUrl: "./images/postImage.jpg",
                postHeading: "Biggest party of the yaer",
                postDate: "30-08-2019",
                postTime: "02:00 PM",
                postContent: "Having you in the party will be a great pleasure for me. I hope you’ll have the time to be with us on [date]. Looking forward to seeing you <br>            We have decided to throw a joyful party on [date]. You are cordially invited to share the joy with us. Your presence means a lot to us!",
                isEvent: true,
                eventDate : "00-00-00",
                eventTtime : "08:00 AM"
            },
            {
                userName: "Shreya Singh",
                userImgUrl: "./images/logo2.jpg",
                postImgUrl: "./images/postImage2.jpg",
                postHeading: "Biggest party of the yaer",
                postDate: "30-08-2019",
                postTime: "02:00 PM",
                postContent: "Having you in the party will be a great pleasure for me. I hope you’ll have the time to be with us on [date]. Looking forward to seeing you <br>            We have decided to throw a joyful party on [date]. You are cordially invited to share the joy with us. Your presence means a lot to us!",
                isEvent: false,
                eventDate : "00-00-00",
                eventTtime : "08:00 AM"
            }
        ]
    };

    

    render() {

        return (this.state.posts.length ? <div className="postArea">

            {/* For each post show POST component, pass props as parameter */}
             {
                this.state.posts.map(post => {
                    return (
                        <Post post={post} key={Math.random()} />
                    )
                })}
        </div> : <div className="noPost">
            <div className="noPostContent">
                <div className="closePost">&times;</div>
                 No post to show, Post something or follow someone 
            </div> 
        </div>
        )
    }
}
export default Posts