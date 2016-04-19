import React, { Component } from 'react';
import SC from './soundcloud';
import firebaseAPI from 'firebase-api';

const tracks = firebaseAPI('soundly').resource('tracks');
//component will mount:

		// ajax call for song
		//add song to list
		//display list
export default class PlayList extends Component {
    constructor(...args){
      super(...args);
      this.state = {
        tracks: []
      }
    }

  makeListItems(track){
  	console.log(track);
  	return <li>{track.title}</li>
  }

  componentWillMount(){
    // allTracks = [];

    tracks.all().then(trackIDs => {

      let promises = trackIDs.map(data => {
      	// trackIDs.forEach(data => {
  
        // console.log(data.trackID)
        // SC.get(`/tracks/${data.trackID}`).then( trackID => {
        //   console.log(trackID)

        //   })
        // })
        return SC.get(`/tracks/${data.trackID}`);
        // SC.get(`/tracks/${data.trackID}`).then(track => {
        // 	allTracks.push(track);
        // });

        // return Promise.all(promises);

      });

      return Promise.all(promises);
    
    }).then(tracks => {
    	//console.log('tracks', tracks);
    	this.setState({tracks: tracks});
    }).catch(error => {
    	console.log(error);
    })
  
  }

  render() {
  	let tracks = this.state.tracks;
    return (
      <div> 
	      <ul>
	      	{ tracks.map(this.makeListItems) }
	      </ul>
      </div>
    )
  }
}
