import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Home from '../components/pages/Home/Home.js';
import MapDemo from '../components/pages/MapDemo/MapDemo.js';
import Layout from '../components/layouts/Layout/Layout.js';

export default (
	<Layout>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/map' component={MapDemo} />
		</Switch>
	</Layout>
);
