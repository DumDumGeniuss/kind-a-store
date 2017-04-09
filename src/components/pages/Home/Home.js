import React from 'react';
import RangeValueBar from '../../bars/RangeValueBar/RangeValueBar.js';

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
		const style = require('./Home.scss');
		const logo = require('./logo.png');
		const search = require('./search.png');

		return (
			<div className={style.home}>
				<div className={style.logo}>
					<img src={logo}/>
				</div>
				<div className={style.form}>
					<div className={style.leftForm}>
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
					<div className={style.rightForm}>
						<div>
							{
								this.state.options.map( (item, index) => {
									return (
										<RangeValueBar
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
					<div className={style.search}>
						<a href="/map"><img src={search}/></a>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
