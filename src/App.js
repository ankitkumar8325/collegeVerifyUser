import React, { Component } from 'react';
import Details from './Details'
import Posts from './Posts'
import Verifier from './Components/Verifier';
import { BrowserRouter, Route } from 'react-router-dom';
import VerifyOTP from './VerifyOTP'
import SendPost from './SendPost'


export class App extends Component {

  handlePopupButton = (e) => {
    document.querySelector('.bg-model').style.visibility = 'visible';
    document.querySelector('.bg-model').style.opacity = 1;
  }

  handleCloseButton = (e) => {
    document.querySelector('.bg-model').style.visibility = 'hidden';
    document.querySelector('.bg-model').style.opacity = 0;
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Details handleCloseButton={this.handleCloseButton} />
          {/*<Posts />*/}
          <div className="editButton edit center container" onClick={this.handlePopupButton}>
            <p className="blue-color editChild">Somethiing wrong with profile</p>
            <p className="green-color editChild">Update it</p>
          </div>

          <Posts />

          <Route path={`/college/:cid`} component={Verifier}></Route>

          <div>VERIFY OTRP</div>
          
          <VerifyOTP />
          
          <SendPost />

        </div>
      </BrowserRouter>
    );
  }
}

export default App