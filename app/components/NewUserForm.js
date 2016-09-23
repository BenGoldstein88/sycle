import React from 'react';
import axios from 'axios';

export default class NewUserForm extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    	email: '',
    	password: '',
    	username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    var that = this
    axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      data: {
        email: that.state.email,
        password: that.state.password,
        username: that.state.username
      }
    })
      .then(function(response) {
      console.log("Here's the signup response: ", response)
    })
      .catch(function(error) {
        console.log('There was an error!', error)
      })
  }

  handleEmailChange(e) {
  	this.setState({
  		email: e.target.value
  	})
  }

  handleUsernameChange(e) {
  	this.setState({
  		username: e.target.value
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
      		Username: 
      		<input type='text' onChange={this.handleUsernameChange} value={this.state.username} />
      		Email: 
      		<input type='text' onChange={this.handleEmailChange} value={this.state.email} />
      		Password: 
      		<input type='password' onChange={this.handlePasswordChange} value={this.state.password} />
      		<input type='submit' value='Sign Up' />
      	</form>
      </div>
    );
  }
}
