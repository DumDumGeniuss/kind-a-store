import React from 'react';

class ModalButton extends React.Component {
	static get propTypes() {
		return {
			width: React.PropTypes.string,
			height: React.PropTypes.string,
		};
	}
	render() {
		const style = require('./ModalButton.scss');
		const modalButtonCustomStyle = {
			width: this.props.width,
			height: this.props.height,
			lineHeight: this.props.height
		};
		return (
			<div className={style.mainZone}>
				<span style={modalButtonCustomStyle} className={style.modalButton}>
					hello
				</span>
			</div>
		);
	}
}

export default ModalButton;
