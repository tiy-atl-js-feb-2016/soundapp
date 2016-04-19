// // Javascript Entry Point
//
// import SC from 'soundcloud';
//
// SC.initialize({
//   client_id: '673d246b540014d9fc9f383caf115b61',
//   redirect_uri: 'http://localhost:8080/callback.html'
// });
//
// SC.connect().then(() => {
//   return SC.get('/tracks', {q: 'michael jackson'})
// }).then(tracks => {
//   console.log('tracks', tracks);
//   let [track] = tracks;
//   document.write(`<h1>${track.title}</h1><img src=${track.artwork_url}>`)
//   return SC.stream(`/tracks/${track.id}`)
// }).then(player => {
//   player.play();
// }).catch(error => {
//   console.log('error', error);
// });


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Search from './search';
import Player from './player';
import PlayList from './playlist';

function addTrack(data, replace) {
  // params.track_id <- add to playlist
  console.log('track', data.params.track_id);
  replace('/playlist')
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Search}/>
    <Route path="/play/:track_id" component={Player}/>
    <Route onEnter={addTrack} path="/playlist/add/:track_id" component={PlayList}/>
    <Route path="/playlist" component={PlayList}/>
  </Router>
), document.querySelector('.app'))





















