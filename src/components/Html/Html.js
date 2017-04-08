import React from 'react';
import serialize from 'serialize-javascript';

const css = `
	body {
		margin: 0px;
		font-size: 50%;
		-webkit-text-size-adjust: none;
	}
	* {
		box-sizing: border-box;
		font-family: 'helvetica neue',helvetica,arial,'lucida grande',sans-serif;
	}
	a {
		text-decoration: none;
		cursor: none;
	}
		a:hover {
	}

	@media screen and (max-width: 500px) {
		body {
			font-size: 40%;
		}
	}
`;

class Html extends React.Component {
	static get propTypes() {
		return {
			assets: React.PropTypes.object,
			reactHtml: React.PropTypes.string,
			store: React.PropTypes.object,
		};
	}
	render() {
		// The assets are providde by webpack-isomorphic-tools
		const { assets, reactHtml, store } = this.props;
		return (
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					{Object.keys(assets.styles).map((style, key) =>
						<link href={assets.styles[style]} key={key} media="screen, projection"
							rel="stylesheet" type="text/css" charSet="UTF-8"/>
					)}
					<style>{css}</style>
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{ __html: reactHtml }}></div>
					<script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${serialize(store.getState())}`}}/>
					<script src={assets.javascript.main} charSet="UTF-8"/>
				</body>
			</html>
		);
	}
}

export default Html;
