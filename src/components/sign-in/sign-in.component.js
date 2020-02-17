import React, { Component } from 'react';

import './sign-in.styles.scss'
import FotmInput from './../fotm-input/fotm-input.component';
import CustomButton from './../custom-button/custom-button.component';


 class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.prevenrDefault();

    this.setState({email: '', password: ''})
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
          <FotmInput 
            type="text" 
            name="email" 
            value={email} 
            required
            handleChange={this.handleChange}
            label="Email"
            />
          

          <FotmInput 
            type="password" 
            name="password" 
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"

            />
          

          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}


export default SignIn
