import React from 'react';
import { gapi } from 'gapi-script';

const SignInButton = () => {
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '636707500167-jl0be6d4pi4e96ttgqkvt1v0758a3r9p.apps.googleusercontent.com'
    })
    console.log('api init successful')
    gapi.load('signin2', () => {
      const params = {
        onSuccess: () => {
          console.log('User has finished signing in!')
        }
      }
      gapi.signin2.render('loginButton', params)
    })
  })

}

export default SignInButton