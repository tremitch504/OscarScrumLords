import React from 'react';
import PropTypes from 'prop-types';

import { GoogleLogout } from 'react-google-login';

const SignOutButton = ({ setLoggedIn, setUserObj }) => {

  const onSuccess = () => {
    console.log('log out successful');
    setLoggedIn(false);
    setUserObj({});

  };

  return (
    <div>
      <GoogleLogout
        clientId={'636707500167-jl0be6d4pi4e96ttgqkvt1v0758a3r9p.apps.googleusercontent.com'}
        onLogoutSuccess={onSuccess}
        style={{height: 5}}

      />
    </div>
  );
};

SignOutButton.propTypes = {
  setLoggedIn: PropTypes.func,
  setUserObj: PropTypes.func,
};

export default SignOutButton;
