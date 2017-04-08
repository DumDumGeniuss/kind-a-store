import React from 'react';
import ModalButton from '../../buttons/ModalButton/ModalButton.js';
import GoogleMapReact from 'google-map-react';

const snazzyMapsStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
];

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
			mapZoom: 15,
			mapOptions: {
			    panControl: true,
			    zoomControl: true,
			    mapTypeControl: false,
			    scaleControl: true,
			    streetViewControl: true,
			    overviewMapControl: true,
			    rotateControl: true,
				styles: snazzyMapsStyle
			    // backgroundColor: 'yellow'
			},
		};
	}
	componentDidMount() {
		// map.setOptions(mapOptions);
		console.log(map.getMapTypeId());
	}
	_onChildMouseEnter(key, childProps){
		console.log(key, childProps);
	}
	_onBoundsChange(center, zoom, bounds, marginBounds) {
		console.log(center, zoom);
		console.log(bounds);
		console.log(marginBounds);
	}
	_onChildClick(key, childProps) {
		console.log(childProps);
	}
	render() {
		const style = require('./MapDemo.scss');
		return (
			<div className={style.map}>
				<GoogleMapReact
					bootstrapURLKeys={{key: 'AIzaSyC18KPUeNeUQDV0KWAiXnuxcb2vaI6FFg0'}}
					defaultCenter={{lat: 25, lng: 121.5}}
					defaultZoom={15}
					center={this.state.mapCenter}
					zoom={this.state.mapZoom}
					options={this.state.mapOptions}
					onChange={this._onBoundsChange}
					onChildClick={this._onChildClick.bind(this)}
					onChildMouseEnter={this._onChildMouseEnter}
					onChildMouseLeave={this._onChildMouseLeave}
				>
					<ModalButton
						lat={25}
						lng={121.5}
						width={'30px'}
						height={'30px'}
					/>
					<ModalButton
						lat={25.1}
						lng={121.6}
						width={'30px'}
						height={'30px'}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default MapDemo;
