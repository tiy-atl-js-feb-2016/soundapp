import React, { Component } from 'react';

import { Link, hashHistory } from 'react-router';

import material from 'material-ui';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

import SC from './soundcloud';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    // height: 400,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 15,
  },
};

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

				<GridTile
				  className="search-track-item"

				  key={track.id}
				  title={track.title}
				  subtitle={<span>by <b>{track.user.username}</b></span>}
				  actionIcon={<Link to={`/playlist/add/${track.id}`}><IconButton tooltip="Add to playlist" tooltipPosition="top-left"><StarBorder color="white"/></IconButton></Link>}
				>

				<Link to={`/play/${track.id}`}>
          <img src={artwork} title="Click to play"/>
        </Link>
					
				</GridTile>
			);

	}

  render() {

	let { tracks } = this.state;

	return (
	
		<div className="search-page"> 

		<header>
			<h1>PlayOnPlayer</h1>
		</header>

		  <div className="search-bar">
			  <input type="text" placeholder="Enter a song" value={this.state.value} onChange={::this.changeHandler}></input>
			  <button onClick={::this.clickHandler} >Search</button>
		  </div>

		  <div style={styles.root}>
			<GridList
			  cellHeight={200}
			  style={styles.gridList}
			>
			  {tracks.map(::this.getTrack)}
			</GridList>
		  </div>
		 </div>

	)
  }
}


		
				// <Link to={`/playlist/add/${track.id}`}>Add to Playlist</Link> 

			

			// {tracks.map(getTrack)}
			// <Link to=`/playlist/add/${someID}`></Link>

		
