/*
 * Arena Deck Review
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

require('./PickCard.less');

var React = require('react');
var TypeAhead = require('../TypeAhead');

var PickCard = React.createClass({

	propTypes: {},

	render() {
		return (
			/* jshint ignore:start */
			<div className="well">
				<TypeAhead id="myTypeahead" array={['Angry Chicken', 'Dummy Target']} placeholder="My Typeahead" />
			</div>
			/* jshint ignore:end */
		);
	}
});

module.exports = PickCard;

