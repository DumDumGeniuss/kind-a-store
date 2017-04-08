import React from 'react';

class Home extends React.Component {
	static get propTypes() {
		return {
		};
	}
	render() {
		const style = require('./Home.scss');
		// In this place, funyee represents the file path.
		//
		// const funyee = require('./funyee.png');
		return (
			<div>
			    Home
			</div>
		);
	}
}

export default Home;
