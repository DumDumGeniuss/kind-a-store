import React from 'react';

class Layout extends React.Component {
	static get propTypes() {
		return {
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			menuSwitch: true
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

		const menuClass = this.state.menuSwitch === true ? style.menu : style.menu + " " + style.menuHidden
		console.log(menuClass)
		return (
			<div>
				<nav className={style.navbar}>
					<div>
						<a href="#" className={style.menuIcon} onClick={this._onClick.bind(this)}><img src={menuIcon}/></a>
						<a href="/" className={style.logoIcon}><img src={logo}/></a>
					</div>
				</nav>
				<div className={menuClass}>
					<div className={style.description}>
						<ul>
							<li>about</li>
							<li>contact</li>
						</ul>
					</div>
					<hr/>
					<div className={style.text}>filter</div>
					<div className={style.form}>
						<select>
							<option>台北市</option>
							<option>台中市</option>
							<option>台南市</option>
							<option>高雄市</option>
						</select>
						<select>
							<option>中山區</option>
							<option>大安區</option>
							<option>信義區</option>
						</select>
					</div>
				</div>
				<div className={style.content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;
