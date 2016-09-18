import React from 'react';
import LoginForm from './LoginForm';
import ListingsList from './ListingsList'
import axios from 'axios'

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

  handleLogin(authToken) {
  	this.setState({
  		loggedIn: true,
  		authToken: authToken
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
      </div>
    );
  }
}