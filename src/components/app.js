import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.onFacebookLogin = this.onFacebookLogin.bind(this);
  }


  onFacebookLogin(response) {
    if (response.status !== 'not_authorized' && response.status !== 'unknown') {
      document.getElementById('facebook').innerHTML = `Welcome, ${response.name}! `;
      document.getElementById('facebook').innerHTML += `<img src="${response.picture.data.url}"/>`;
      document.getElementById('facebook').style = 'display: block';
    } else {
      document.getElementById('facebook').style = 'display: block';
    }
  }

  renderFB(response) {

  }

  render() {
    return (
      <div id="login">
        <div id="facebook">
          <FacebookLogin
            appId="1020474614715187"
            autoLoad
            fields="name,email,picture.type(large)"
            callback={this.onFacebookLogin}
          />
        </div>
      </div>
    );
  }
}

export default App;
