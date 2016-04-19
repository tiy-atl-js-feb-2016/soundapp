import React, { Component } from 'react';
import SC from './soundcloud';
import firebaseAPI from 'firebase-api';
import { Link } from 'react-router';

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
       let promises = trackIDs.map(data =>{
      return SC.get(`/tracks/${data.trackID}`)
          })
      return Promise.all(promises)
    }).then(allSongs => {
      this.setState({
        playlist: allSongs
      })
    })
  }
  makeLink(song){
    return (
      <Link key={song.id} to={`/play/${song.id}`}>{song.title}</Link>
    )
  }
  render() {
    let { playlist } = this.state;
    console.log(playlist)
    return (
      <div className='playlist-wrapper'>
        {playlist.map(::this.makeLink)}
      </div>
    )
  }
}
