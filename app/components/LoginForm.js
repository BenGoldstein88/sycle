import React from 'react';
import axios from 'axios'
export default class LoginForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    	email: '',
    	password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onLogin(this.state.email, this.state.password)
  }

  handleEmailChange(e) {
  	this.setState({
  		email: e.target.value
  	})
  }

  handlePasswordChange(e) {
  	this.setState({
  		password: e.target.value
  	})
  }

  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
      		Email: 
      		<input type='text' onChange={this.handleEmailChange} value={this.state.email} />
      		Password: 
      		<input type='password' onChange={this.handlePasswordChange} value={this.state.password} />
      		<input type='submit' value='Login' />
      	</form>
      </div>
    );
  }
}
