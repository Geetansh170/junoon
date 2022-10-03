import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

class Gauth extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <GoogleLogin
        className="google"
        clientId="1016540384600-gk5t8fjk7vjt4dt4hii2rff7qn928c7a.apps.googleusercontent.com"
        buttonText="Login"
        theme="dark"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    );
  }
}

export default Gauth;
