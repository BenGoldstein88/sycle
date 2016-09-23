import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import ListingsList from './ListingsList'
import NewUserForm from './NewUserForm'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	loggedIn: false,
    	authToken: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogin(email, password) {
  	var that = this
    axios({
      method: 'post',
      url: 'http://localhost:3000/authenticate',
      data: {
        email: email,
        password: password
      }
    })
      .then(function(response) {
      console.log("Here's the login response: ", response)
      that.setState({
      	loggedIn: true,
      	authToken: response.data.auth_token
      })
    })
      .catch(function(error) {
        console.log('There was an error!', error)
      })
  }

  handleLogout(e) {
  	e.preventDefault()
  	this.setState({
  		loggedIn: false,
  		authToken: ''
  	})
  }
  
  render() {
  	if(this.state.loggedIn) {
  		var thingToDisplay = 	<div>
  									<ListingsList authToken={this.state.authToken}/>
  									<form onSubmit={this.handleLogout}>
  										<input type='submit' value='Logout' />
  									</form>
  								</div>

  	} else {
  		var thingToDisplay = <LoginForm onLogin={this.handleLogin}/>

  	}
    return (
      <div>
        <h1> Hello there, syclist! </h1>
        {thingToDisplay}
        <NewUserForm />
      </div>
    );
  }
}