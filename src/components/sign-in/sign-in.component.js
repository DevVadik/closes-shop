import React, { Component } from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.util';

 class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {email,password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({email: '', password: ''})

    } catch (error) {
      console.error('error: ', error);
    }


  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value})
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="sign-in"> 
        <h2>I alredy have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="email" 
            value={email} 
            required
            handleChange={this.handleChange}
            label="Email"
            />
          

          <FormInput 
            type="password" 
            name="password" 
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"

            />
          

          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton 
              onClick={signInWithGoogle} 
              isGoggleSignIn>
              {''}
               Sign In with Google
               {''}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn
