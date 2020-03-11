import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I alredy have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='email'
          value={email}
          required
          handleChange={event => handleChange(event)}
          label='Email'
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={event => handleChange(event)}
          label='Password'
        />

        <div className='buttons'>
          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoggleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
