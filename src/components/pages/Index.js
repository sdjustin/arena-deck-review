/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../Application');
var PickCard = require('../PickCard');

var HomePage = React.createClass({

	statics: {
		layout: App
	},

	componentWillMount() {
		PageActions.set({title: 'Arena Deck Review'});
	},

	render() {
		return (
			/* jshint ignore:start */
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<PickCard />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<PickCard />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<PickCard />
					</div>
				</div>
			</div>
			/* jshint ignore:end */
		);
	}
});

module.exports = HomePage;
