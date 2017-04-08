import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../components/pages/Home/Home.js';
import MapDemo from '../components/pages/MapDemo/MapDemo.js';
import Layout from '../components/layouts/Layout/Layout.js';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path='map' component={MapDemo} />
	</Route>
);
