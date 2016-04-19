import React, { Component } from 'react';

//component will mount: 

		// ajax call for song
		//add song to list
		//display list 
		
export default class PlayList extends Component {

  componentWillMount(){
    let { track_id } = this.props.params;

  }

  render() {
    return (
      <div> Fix me </div>
    )
  }
}
