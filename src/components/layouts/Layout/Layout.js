import React from 'react';
import { Link } from 'react-router-dom'; 
import './Layout.css';
import menuIcon from './hamburger.png';
import logo from './logo.png';

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

		const menuClass = this.state.menuSwitch === true ? 'Layout-menu' : 'Layout-menu Layout-menuHidden'
		console.log(menuClass)
		return (
			<div>
				<nav className={'Layout-navbar'}>
					<div>
						<Link to={"#"} className={'Layout-menuIcon'} onClick={this._onClick.bind(this)}><img src={menuIcon} alt={'menu function icon'}/></Link>
						<Link to={"/"} className={'Layout-logoIcon'}><img src={logo} alt={'logo'}/></Link>
					</div>
				</nav>
				<div className={menuClass}>
					<div className={'Layout-description'}>
						<ul>
							<li>about</li>
							<li>contact</li>
						</ul>
					</div>
					<hr/>
					<div className={'Layout-text'}>filter</div>
					<div className={'Layout-form'}>
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
				<div className={'Layout-content'}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;
