import React from 'react';
import PropTypes from 'prop-types';

import { GoogleLogout } from 'react-google-login';

const SignOutButton = ({ setLoggedIn, setUserObj, userObj }) => {

  const onSuccess = () => {
    console.log('wuts the value of userObj', userObj);
    console.log('log out successful');
    setLoggedIn(false);
    setUserObj({});

  };

  return (
    <div>
      <GoogleLogout
        clientId={'636707500167-jl0be6d4pi4e96ttgqkvt1v0758a3r9p.apps.googleusercontent.com'}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

SignOutButton.propTypes = {
  setLoggedIn: PropTypes.func,
  setUserObj: PropTypes.func,
  userObj: PropTypes.object
};

export default SignOutButton;
