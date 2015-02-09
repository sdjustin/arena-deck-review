/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var Link = require('../Link');

var Navbar = React.createClass({

	render() {
		return (
			/* jshint ignore:start */
			<div className="navbar-top" role="navigation">
				<div className="container">
					<Link className="navbar-brand row" to="/">
						<img src="/images/card-back.png" width="25" height="38" alt="card back" />
						<span>Arena Deck Review</span>
					</Link>
				</div>
			</div>
			/* jshint ignore:end */
		);
	}
});

module.exports = Navbar;
