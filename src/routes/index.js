import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import routes from './routes.js';

class Routers extends React.Component {
	render() {
		return (
			<Router>
				{routes}
			</Router>
		);
	}
}

export default Routers;