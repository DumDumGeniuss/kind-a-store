import React from 'react';
import RangeValueBar from '../../bars/RangeValueBar/RangeValueBar.js';
import './Home.css';
import logo from './logo.png';
import search from './search.png';

const fakeOptions = [
	{
		type: '坪數',
		width: 200,
		minBound: 20, 
		maxBound: 90,
		leftBound: 30,
		rightBound: 73
	},
	{
		type: '租金',
		width: 200,
		minBound: 100, 
		maxBound: 900,
		leftBound: 300,
		rightBound: 450
	}
];

class Home extends React.Component {
	static get propTypes() {
		return {
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			options: fakeOptions
		};
		const a = [1, 2, 3, 4, 5];
		const b = {
			a: '1',
			b: '2'
		}
		console.log(...a);
		console.log(...b);
	}
	onRangeBarClick(index, newLeftBound, newRightBound) {
		const newOptions = JSON.parse(JSON.stringify(this.state.options));
		newOptions[index].leftBound = newLeftBound;
		newOptions[index].rightBound = newRightBound;
		this.setState({
			options: newOptions
		});
	}
	render() {

		return (
			<div className={'Home-home'}>
				<div className={'Home-logo'}>
					<img src={logo} alt={'logo'}/>
				</div>
				<div className={'Home-form'}>
					<div className={'Home-leftForm'}>
						<div>
							<select>
								<option value="1">台北市</option>
								<option value="2">台中市</option>
								<option value="3">台南市</option>
								<option value="4">高雄市</option>
							</select>
							<select>
								<option value="1">中山區</option>
								<option value="2">大安區</option>
								<option value="3">信義區</option>
							</select>
						</div>
					</div>
					<div className={'Home-rightForm'}>
						<div>
							{
								this.state.options.map( (item, index) => {
									return (
										<RangeValueBar
											key={item.type}
											onBarClick={this.onRangeBarClick.bind(this, index)}
											type={item.type}
											width={item.width}
											minBound={item.minBound} 
											maxBound={item.maxBound}
											leftBound={item.leftBound}
											rightBound={item.rightBound}
										/>
									);
								})
							}
						</div>
					</div>
					<div className={'Home-search'}>
						<a href="/map"><img src={search} alt={'search icon'}/></a>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
