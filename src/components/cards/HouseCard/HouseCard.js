import React from 'react';

class HouseCard extends React.Component {
	static get propTypes() {
		return {
			order: React.PropTypes.number,
			width: React.PropTypes.string,
			height: React.PropTypes.string,
			left: React.PropTypes.string,
			isCardPop: React.PropTypes.boolean,
			order: React.PropTypes.number,
			price: React.PropTypes.number,
			area: React.PropTypes.number,
			addresss: React.PropTypes.string,
			type: React.PropTypes.string,
			crowd: React.PropTypes.number,
			traffic: React.PropTypes.number,
			consumLevel: React.PropTypes.number,
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			isCardPop: false
		};
	}
	render() {
		const style = require('./HouseCard.scss');
		const modalButtonCustomStyle = {
			width: this.props.width,
			height: this.props.height,
			lineHeight: this.props.height
		};

		const cardClass = this.props.isCardPop ? style.card + ' ' + style.cardPop : style.card;
		return (
			<div className={style.mainZone}>
				<div order={this.props.order} style={modalButtonCustomStyle} className={cardClass}>
					<div className={style.titleZone}>
						<b>
							<span className={style.priceWord}>
								<small>＄ </small> 
								{this.props.price}
								<small> 元/月</small> 
							</span>
						</b>
						<b>
							<span className={style.areaWord}>
								{this.props.area}
								<small> 坪</small>
							</span>
						</b>
					</div>
					<div className={style.detailZone}>
						<span className={style.addressWord}>
							{this.props.addresss}
						</span>
						<div className={style.tagWordsZone}>
							<span className={style.tagWord}>
								{this.props.type}
							</span>
						</div>
						<div className={style.barZone}>
							<span className={style.barWord}>人潮</span>
							<span className={style.bar}></span>
							<span style={{width: this.props.crowd * 170 + 'px'}} className={style.barFill}></span>
						</div>
						<div className={style.barZone}>
							<span className={style.barWord}>交通便利性</span>
							<span className={style.bar}></span>
							<span style={{width: this.props.traffic * 170 + 'px'}} className={style.barFill}></span>
						</div>
						<div className={style.barZone}>
							<span className={style.barWord}>消費能力</span>
							<span className={style.bar}></span>
							<span style={{width: this.props.consumLevel * 170 + 'px'}} className={style.barFill}></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HouseCard;
