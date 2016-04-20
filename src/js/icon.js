import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {

	static propTypes = {
		type: PropTypes.string.isRequired
	}

	render() {
		let { type } = this.props;
		return (
			<i className={`fa fa-${type}`}/>
		);
	}
}