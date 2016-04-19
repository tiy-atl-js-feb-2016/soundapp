import React, { Component } from 'react';

import { Link, hashHistory } from 'react-router';

import SC from './soundcloud';

export default class Search extends Component {

	constructor(...args){
		super(...args)

		this.state = {

			tracks: []

		}


	}
  

	clickHandler(){

		SC.get('/tracks', {q: 'kanye'}).then(tracks => {

			this.setState({tracks});

		});


	}


	getTrack(track){

		return(

			<li key={track.id}>

				{track.title}

			</li>

			);

	}

  render() {

  	let { tracks } = this.state;



    return (
      <div> 

      	<input type="text" placeholder="Enter a song"></input>
      	<button onClick={::this.clickHandler} >Search</button>

      		
      	<ul className="search-results">
      		{tracks.map(::this.getTrack)}

      	</ul>

      </div>
    )
  }
}
      		// {tracks.map(getTrack)}
      		// <Link to=`/playlist/add/${someID}`></Link>
