import React from 'react';
import ModalButton from '../../buttons/ModalButton/ModalButton.js';
import GoogleMapReact from 'google-map-react';

class MapDemo extends React.Component {
	static get propTypes() {
		return {
			center: React.PropTypes.object,
			zoom: React.PropTypes.number
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			mapCenter: {lat: 25, lng: 121.5},
			mapZoom: 15
		};
	}
	componentDidMount() {
	}
	_onChildMouseEnter(key, childProps){
		console.log(key, childProps);
	}
	_onBoundsChange(center, zoom, bounds, marginBounds) {
		console.log(center, zoom);
		console.log(bounds);
		console.log(marginBounds);
	}
	render() {
		const style = require('./MapDemo.scss');
		return (
			<div className={style.map}>
				<GoogleMapReact
					bootstrapURLKeys={{key: 'AIzaSyC18KPUeNeUQDV0KWAiXnuxcb2vaI6FFg0'}}
					defaultCenter={this.state.mapCenter}
					defaultZoom={this.state.mapZoom}
					onBoundsChange={this._onBoundsChange}
					onChildClick={this._onChildClick}
					onChildMouseEnter={this._onChildMouseEnter}
					onChildMouseLeave={this._onChildMouseLeave}
				>
					<ModalButton
						lat={25}
						lng={121.5}
						width={'30px'}
						height={'30px'}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default MapDemo;
