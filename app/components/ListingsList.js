import React from 'react';
import axios from 'axios'

export default class ListingsList extends React.Component {


  constructor(props) {
    super(props);

    this.state= {
    	auction: {},
    	listings: []
    }

    this.getListings = this.getListings.bind(this)
    this.getUserListings = this.getUserListings.bind(this)
  }

  getListings() {
  	var that = this

  	axios({
  		method: 'get',
  		url: 'http://localhost:3000/currentauction',
  		headers: { 'Authorization': that.props.authToken}
  	})
  	.then(function(response) {
  		console.log('Response: ', response)
  		that.setState({
  			auction: response.data.auction,
  			listings: response.data.listings
  		})
  	})
  	.catch(function(error) {
  		console.log('Error: ', error)
  	})
  }

  getUserListings() {
  	var that = this
  	axios({
  		method: 'get',
  		url: 'http://localhost:3000/userlistings',
  		headers: { 'Authorization': that.props.authToken}
  	})
  	.then(function(response) {
  		console.log('Response: ', response)
  		that.setState({
  			listings: response.data.listings
  		})
  	})
  	.catch(function(error) {
  		console.log('Error: ', error)
  	})  	
  }

  render() {
    return (
      <div>
      <form onSubmit={this.getListings} >
      	<input type='submit' value='Current Auction' />
      </form>
      <form onSubmit={this.getUserListings} >
      	<input type='submit' value='Your Listings' />
      </form>
      </div>
    );
  }
}
