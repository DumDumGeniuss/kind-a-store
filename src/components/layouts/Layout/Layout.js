import React from 'react';

class Layout extends React.Component {
	static get propTypes() {
		return {
		};
	}
	render() {
		const style = require('./Layout.scss');
		return (
			<div>
				<nav className={style.navbar}>
					<a href="https://www.google.com">HouseHack</a>
				</nav>
				<div className={style.content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;
