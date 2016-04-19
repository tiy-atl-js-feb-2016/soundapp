// Javascript Entry Point

import SC from 'soundcloud';

SC.initialize({
  client_id: '673d246b540014d9fc9f383caf115b61',
  redirect_uri: 'http://localhost:8080/callback.html'
});

SC.connect();

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
//
// export function search(query) {
//   return SC.get('/tracks', {q: query})
// }

export default SC;
