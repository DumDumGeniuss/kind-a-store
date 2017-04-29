import React from 'react';
import './ModalButton.css';

class ModalButton extends React.Component {
	static get propTypes() {
		return {
			width: React.PropTypes.string,
			height: React.PropTypes.string,
			lineHeight: React.PropTypes.string,
		};
	}
	render() {
		const modalButtonCustomStyle = {
			width: this.props.width,
			height: this.props.height,
			lineHeight: this.props.height
		};
		return (
			<div className={'ModalButton-mainZone'}>
				<span style={modalButtonCustomStyle} className={'ModalButton-modalButton'}>
					hello
				</span>
			</div>
		);
	}
}

export default ModalButton;
