import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeContainer from '../containers/HomeContainer/HomeContainer.js';
import MapDemo from '../components/pages/MapDemo/MapDemo.js';
import Layout from '../components/layouts/Layout/Layout.js';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={HomeContainer} />
		<Route path='map' component={MapDemo} />
	</Route>
);
