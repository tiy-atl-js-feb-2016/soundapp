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
        playlist: []
      }
    }

  componentWillMount(){
    tracks.all().then(trackIDs => {

       trackIDs.forEach(data =>{

        console.log(data.trackID)
        SC.get(`/tracks/${data.trackID}`).then( trackID => {
          console.log(trackID)
          })
        })
      }).then(track => {
          console.log(track)
    })
    // })
  }

  render() {
    return (
      <div> Fix me </div>
    )
  }
}
