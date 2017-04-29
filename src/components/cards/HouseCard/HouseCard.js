import React from 'react';
import './HouseCard.css';

class HouseCard extends React.Component {
	static get propTypes() {
		return {
			order: React.PropTypes.number,
			width: React.PropTypes.string,
			height: React.PropTypes.string,
			left: React.PropTypes.string,
			isCardPop: React.PropTypes.bool,
			price: React.PropTypes.number,
			area: React.PropTypes.number,
			addresss: React.PropTypes.string,
			type: React.PropTypes.string,
			crowd: React.PropTypes.number,
			traffic: React.PropTypes.number,
			consumLevel: React.PropTypes.number,
			age: React.PropTypes.number,
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			isCardPop: false
		};
	}
	render() {
		const modalButtonCustomStyle = {
			width: this.props.width,
			height: this.props.height,
			lineHeight: this.props.height
		};

		const cardClass = this.props.isCardPop ? 'HouseCard-card HouseCard-cardPop' : 'HouseCard-card';
		return (
			<div className={'HouseCard-mainZone'}>
				<div order={this.props.order} style={modalButtonCustomStyle} className={cardClass}>
					<div className={'HouseCard-titleZone'}>
						<b>
							<span className={'HouseCard-priceWord'}>
								<small>＄ </small> 
								{this.props.price}
								<small> 元/月</small> 
							</span>
						</b>
						<b>
							<span className={'HouseCard-areaWord'}>
								{this.props.area}
								<small> 坪</small>
							</span>
						</b>
					</div>
					<div className={'HouseCard-detailZone'}>
						<span className={'HouseCard-addressWord'}>
							{this.props.addresss}
						</span>
						<div className={'HouseCard-tagWordsZone'}>
							<span className={'HouseCard-tagWord'}>
								{this.props.type}
							</span>
							<span className={'HouseCard-tagWord'}>
								{this.props.age}年
							</span>
						</div>
						<div className={'HouseCard-barZone'}>
							<span className={'HouseCard-barWord'}>人潮</span>
							<span className={'HouseCard-bar'}></span>
							<span style={{width: this.props.crowd * 170 + 'px'}} className={'HouseCard-barFill'}></span>
						</div>
						<div className={'HouseCard-barZone'}>
							<span className={'HouseCard-barWord'}>交通便利性</span>
							<span className={'HouseCard-bar'}></span>
							<span style={{width: this.props.traffic * 170 + 'px'}} className={'HouseCard-barFill'}></span>
						</div>
						<div className={'HouseCard-barZone'}>
							<span className={'HouseCard-barWord'}>消費能力</span>
							<span className={'HouseCard-bar'}></span>
							<span style={{width: this.props.consumLevel * 170 + 'px'}} className={'HouseCard-barFill'}></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HouseCard;
