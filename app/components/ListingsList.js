import React from 'react';
import axios from 'axios'

export default class ListingsList extends React.Component {


  constructor(props) {
    super(props);

    this.state= {
    	listings: []
    }

    this.getListings = this.getListings.bind(this)
  }

  getListings() {
  	axios({
  		method: 'get',
  		url: 'http://localhost:3000/userindex',
  		headers: { 'Authorization': this.props.authToken}
  	})
  	.then(function(response) {
  		console.log('Response: ', response)
  	})
  	.catch(function(error) {
  		console.log('Error: ', error)
  	})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.getListings} >
      	<input type='submit' value='get listings' />
      </form>
      </div>
    );
  }
}
