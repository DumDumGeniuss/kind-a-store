import React from 'react';

class Home extends React.Component {
	static get propTypes() {
		return {
		};
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
						<select>
							<option value ="1">台北市</option>
						  <option value ="2">台中市</option>
						  <option value="3">台南市</option>
						  <option value="4">高雄市</option>
						</select><br/>
						<select>
							<option value ="1">中山區</option>
						  <option value ="2">大安區</option>
						  <option value="3">信義區</option>
						 </select>
					</div>
					<div className={style.rightForm}>
						<div>
							<div className={style.text}>租金</div>
						</div>
						<div className={style.bar}>
							<div className={style.baseBar}></div>
							<div className={style.topBarA}></div>
						</div>
						<div>
							<div className={style.text}>坪數</div>
						</div>
						<div className={style.bar}>
							<div className={style.baseBar}></div>
							<div className={style.topBarB}></div>
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
