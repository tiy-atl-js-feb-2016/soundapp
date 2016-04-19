import React, { Component } from 'react';

import { Link, hashHistory } from 'react-router';

import SC from './soundcloud';

export default class Search extends Component {

	constructor(...args){
		super(...args)

		this.state = {

			tracks: [],
			value: ''

		}
	}
  

	clickHandler(){

		SC.get('/tracks', {q: this.state.value}).then(tracks => {

			this.setState({tracks});

		});

	}

	changeHandler(e){

		this.setState({

			value: e.target.value

		});

	}


	getTrack(track){
		console.log('avatar', track);
		let artwork = track.artwork_url ? track.artwork_url : './images/1355481.jpg';
		return(

			<li className="search-track-item" key={track.id}>

				<img src={artwork}/>
				{track.title}
				<Link to={`/play/${track.id}`}>Play</Link>
				<Link to={`/playlist/add/${track.id}`}>Add to Playlist</Link> 

			</li>

			);

	}

  render() {

  	let { tracks } = this.state;



    return (
      <div className="search-page"> 

      	<input type="text" placeholder="Enter a song" value={this.state.value} onChange={::this.changeHandler}></input>
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
