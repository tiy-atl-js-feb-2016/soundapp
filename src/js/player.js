import React, { Component } from 'react';
import SC from './soundcloud';
import Slider from 'material-ui/lib/slider';
import Icon from './icon';


export default class Player extends Component {

	// constructor (...args) {
	// 	super (...args);
		// this.state = {
		// 	tracks: []
		// }

	constructor(...args) {
		super(...args);
		this.state = {
			duration: 1,
			position: 0
		}
	}


	

componentWillMount() {	

	let {track_id} = this.props.params;


	SC.stream(`/tracks/${track_id}`).then(player => {
		// this.setState({tracks})
		this.player = player;
		console.log('got player', this.player);
	}) 
}

playHandler() {
	console.log('player gon play', this.player);
	this.player.play();
	this.updatePosition();
	this.interval = setInterval(::this.updatePosition, 1000);
}

updatePosition() {
	console.log(this.player.position, this.player.duration)
	window.player = this.player;
	console.log('CONTROLLER', this.player.controller)
	if (this.player.controller) {	
		this.setState({
			duration: this.player.controller.getDuration(),
			position: this.player.controller.getCurrentPosition()
		});
	}
}

stopHandler() {
	// console.log(this.player);
	console.log('player gon stop', this.player);
	this.player.pause();
	clearInterval(this.interval);
}


  render() { 
  let {track_id } = this.props.params;
  let { duration, position } = this.state;
  // console.log(this); 
    return (
      <div> 

      	<div className="player-wrapper">
      		<div className="play-pause">
	      		<button className="button-player1" onClick={::this.playHandler}>
	      			<Icon type="play" />
	      		</button>
	      		<button className="button-player2" onClick={::this.stopHandler}>
	      			<Icon type="pause" />
	      		</button>
      		</div>
      		<div className="scrubber">
      		 <Slider style={{width: 300, bottomPadding: 20 }}max={duration} value={position}/>
      		</div>
      	</div>

       </div>
)
}
}

  		   

