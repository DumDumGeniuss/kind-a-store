import React from 'react';

class RangeValueBar extends React.Component {
	static get propTypes() {
		return {
			type: React.PropTypes.string,
			width: React.PropTypes.string,
			minBound: React.PropTypes.number, 
			maxBound: React.PropTypes.number,
			leftBound: React.PropTypes.number,
			rightBound: React.PropTypes.number,
			onBarClick: React.PropTypes.function
		};
	}
	_onClickBar(id, e) {
		const emptyBar = document.getElementById(id);
		const emptyBarRect = emptyBar.getBoundingClientRect();
		const maxRange = this.props.maxBound - this.props.minBound;
		const currentLeftCoeffecient =  (this.props.leftBound - this.props.minBound) / maxRange;
		const currentRightCoeffecient =  (this.props.rightBound - this.props.minBound) / maxRange;
		const newCoeffecient = (e.pageX - emptyBarRect.left) / this.props.width;

		/* If closer to left bound, then replace left bound, otherwise, right bound*/
		let leftDistance = newCoeffecient - currentLeftCoeffecient;
		leftDistance = leftDistance > 0 ? leftDistance : -leftDistance;
		let rightDistance = newCoeffecient - currentRightCoeffecient;
		rightDistance = rightDistance > 0 ? rightDistance : -rightDistance;

		const newLeftCoeffecient = leftDistance < rightDistance ? newCoeffecient : currentLeftCoeffecient;
		const newRightCoeffecient = leftDistance >= rightDistance ? newCoeffecient : currentRightCoeffecient;

		this.props.onBarClick(
			parseInt(this.props.minBound + maxRange * newLeftCoeffecient, 10),
			parseInt(this.props.minBound + maxRange * newRightCoeffecient, 10)
		);
	}
	render() {
		const style = require('./RangeValueBar.scss');
		const maxRange = this.props.maxBound - this.props.minBound;
		const leftCoeffecient = (this.props.leftBound - this.props.minBound) / maxRange;
		const rightCoeffecient = (this.props.rightBound - this.props.minBound) / maxRange;
		const fullBarWidth = (rightCoeffecient - leftCoeffecient) * this.props.width;

		return (
			<div id={'RangeValueBarEmpty'} onClick={this._onClickBar.bind(this, 'RangeValueBarEmpty')} style={{width: this.props.width}} className={style.mainZone}>
				<span className={style.typeWord}>{this.props.type}</span>
				<div
					style={{width: this.props.width}}
					className={style.bar}
				>
				</div>
				<div
					style={{
						height: this.props.height,
						width: fullBarWidth,
						left: leftCoeffecient * this.props.width
					}}
					className={style.barFilled}
				>
					<div className={style.barLeftCircle}></div>
					<span className={style.lowerBoundWord}>{this.props.leftBound}</span>
					<div className={style.barRightCircle}></div>
					<span className={style.higherBoundWord}>{this.props.rightBound}</span>
				</div>
			</div>
		);
	}
}

export default RangeValueBar;
