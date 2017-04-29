import React from 'react';
import HouseMarker from '../../markers/HouseMarker/HouseMarker.js';
import HouseCard from '../../cards/HouseCard/HouseCard.js';
import GoogleMapReact from 'google-map-react';
import fakeReport from './fakeReport.png';
import './MapDemo.css';

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
                "visibility": "on"
            },
            {
                "color": "#424b5b"
            },
            {
                "weight": 2
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#545b6b"
            },
            {
                "gamma": "0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "10"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#424a5b"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2e3546"
            }
        ]
    }
];


const coeffecient = 0.007;
const priceCoeffecient = 20000;
const areaCoeffecient = 40;

const fakeHouses = [
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '公寓',
		age: 22,
		addresss: '台北市大安區軍和街455巷10弄26號',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '公寓',
		age: 4,
		addresss: '台北市松山區松山路222號5樓',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '透天',
		age: 7,
		addresss: '台北市松山區軍和街455巷10弄26號',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '透天',
		age: 13,
		addresss: '台北市中山區中山路222號2樓',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '公寓',
		age: 19,
		addresss: '台北市松山區民權西路222號2樓',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
	{
		crowd: Math.random(),
		traffic: Math.random(),
		consumLevel: Math.random(),
		type: '公寓',
		age: 23,
		addresss: '台北市信義區基隆路222號2樓',
		price: 40000 + parseInt(Math.random() * priceCoeffecient * (Math.random()>0.5?1:-1), 10),
		area: 70 + parseInt(Math.random() * areaCoeffecient * (Math.random()>0.5?1:-1), 10),
		lat: 25 + Math.random() * coeffecient * (Math.random()>0.5?1:-1),
		lng: 121.5 + Math.random() * coeffecient * (Math.random()>0.5?1:-1)
	},
]

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
			houses: fakeHouses,
			reportSwitch: false,
			reportCrowd: Math.random(),
			reportTraffic: Math.random(),
			reportConsumLevel: Math.random(),
			reportType: '',
			reportAddresss: '',
			reportPrice: Math.random(),
			reportArea: '',
			reportLat: '',
			reportLng: '',
		};
	}
	componentWillMount() {

	}
	componentDidMount() {
	}
	_onChildMouseEnter(key, childProps){
		const order = childProps.order;

		this.setState( (state) => {
			state.houses[order].isCardPop = true;
			return {
				houses: state.houses
			};
		});

		const bar = document.getElementById('MapDemoCardsBarTotal');
		bar.scrollLeft = 310 * order;
	}
	_onChildMouseLeave(key, childProps){
		const order = childProps.order;
		this.setState( (state) => {
			state.houses[order].isCardPop = false;
			return {
				houses: state.houses
			};
		});
	}
	_onBoundsChange(center, zoom, bounds, marginBounds) {
		// console.log(bar.tagName);
	}
	_onChildClick(key, childProps) {
		this.setState({
			reportSwitch: !this.state.reportSwitch,
		});
	}
	_onCloseReportClick() {
		this.setState({
			reportSwitch: !this.state.reportSwitch,
		});
	}
	_onCardMouseEnter(index, e) {
		this.setState( (state) => {
			state.houses[index].isCardPop = true;
			return {
				houses: state.houses
			};
		});
	}
	_onCardMouseLeave(index, e) {
		this.setState( (state) => {
			state.houses[index].isCardPop = false;
			return {
				houses: state.houses
			};
		});
	}
	_onCardClick(index, e) {
		this.setState({
			reportSwitch: !this.state.reportSwitch,
			reportPrice: this.state.houses.price
		});
	}
	render() {
		const self = this;
		const reportModalStyle = this.state.reportSwitch ? 'MapDemo-reportModal MapDemo-reportModalPop' : 'MapDemo-reportModal';
		return (
			<div className={'MapDemo-mainZone'}>
				<div className={'MapDemo-map'}>
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyC18KPUeNeUQDV0KWAiXnuxcb2vaI6FFg0'}}
						defaultCenter={{lat: 25, lng: 121.5}}
						defaultZoom={6}
						center={this.state.mapCenter}
						zoom={this.state.mapZoom}
						options={this.state.mapOptions}
						onChange={this._onBoundsChange}
						onChildClick={this._onChildClick.bind(this)}
						onChildMouseEnter={this._onChildMouseEnter.bind(this)}
						onChildMouseLeave={this._onChildMouseLeave.bind(this)}
					>
						{
							this.state.houses.map( (item, index) => {
								return (
									<HouseMarker
										key={'marker-' + index}
										order={index}
										lat={item.lat}
										lng={item.lng}
										width={30}
										height={30}
										is_hover={item.isCardPop}
									/>
								);
							})
						}
					</GoogleMapReact>
				</div>
				<div id='MapDemoCardsBarTotal' className={'MapDemo-cardsBarTotal'}>
					<div className={'MapDemo-cardsBar'}>
						{
							this.state.houses.map( (item, index) => {
								return (
									<div
										key={'card-' + index}
										style={{display: 'inline-block'}}
										onMouseEnter={self._onCardMouseEnter.bind(self, index)}
										onMouseLeave={self._onCardMouseLeave.bind(self, index)}
										onClick={self._onCardClick.bind(self, index)}
									>
										<HouseCard
											order={index}
											addresss={item.addresss}
											price={item.price}
											area={item.area}
											age={item.age}
											lat={item.lat}
											lng={item.lng}
											isCardPop={item.isCardPop}
											type={item.type}
											crowd={item.crowd}
											traffic={item.traffic}
											consumLevel={item.consumLevel}
										/>
									</div>
								);
							})
						}
					</div>
				</div>
				<div className={reportModalStyle}>
					<div onClick={this._onCloseReportClick.bind(this)} className={'MapDemo-reportHide'}>
					</div>
					<div className={'MapDemo-reportContent'}>
						<img src={fakeReport} alt={'fake report'}/>
					</div>
				</div>
			</div>
		);
	}
}

export default MapDemo;
