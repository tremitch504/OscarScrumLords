import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

const SignInButton = ({ setLoggedIn, setUserObj }) => {

  const onSuccess = (response) => {
    console.log('log in success', response.profileObj);
    setLoggedIn(true);
    setUserObj(response.profileObj);

  };

  const onFailure = (response) => {
    console.log('log in failure', response);
  };


  return (
    <div>
      <GoogleLogin
        clientId={'636707500167-jl0be6d4pi4e96ttgqkvt1v0758a3r9p.apps.googleusercontent.com'}
        buttonText="Sign in"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        style={{color: 'pink'}}
      />
    </div>
  );
};

SignInButton.propTypes = {
  setLoggedIn: PropTypes.func,
  setUserObj: PropTypes.func,
};

export default SignInButton;
