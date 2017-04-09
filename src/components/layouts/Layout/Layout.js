import React from 'react';

class Layout extends React.Component {
	static get propTypes() {
		return {
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			menuSwitch: false
		};
	}
	_onClick() {
		this.setState({
			menuSwitch: !this.state.menuSwitch
		});
	}
	render() {
		const style = require('./Layout.scss');
		const menuIcon = require('./hamburger.png');
		const logo = require('./logo.png');
		const menu = require('./menu.png');
		return (
			<div>
				<nav className={style.navbar}>
					<div>
						<a href="#" className={style.menuIcon} onClick={this._onClick.bind(this)}><img src={menuIcon}/></a>
						<a href="/" className={style.logoIcon}><img src={logo}/></a>
					</div>
				</nav>
				<div className={this.state.menuSwitch ? style.menu : style.menuHidden}>
					<img src={menu}/>
				</div>
				<div className={style.content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;
