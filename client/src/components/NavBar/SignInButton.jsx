import React from 'react';
import PropTypes from 'prop-types';


//parent is App.jsx

const SignInButton = ({ setLoggedIn, createUser }) => {

  const onSuccess = ({profileObj}) => {
    setLoggedIn(true);
    createUser(profileObj);
  };

  const onFailure = (response) => {
    console.warn('log in failure', response);
  };


  return (
    <div>
      
      <a href='/google'>google login</a>
    </div>
  );
};

SignInButton.propTypes = {
  setLoggedIn: PropTypes.func,
  createUser: PropTypes.func
};

export default SignInButton;


