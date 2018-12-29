const decache = require('decache');
const R = require('ramda');
const _ = require('lodash');
const moment = require('moment-timezone');
const fs = require('fs');
const utilities = require('./utilities');

const reload = (module) => {
	decache(module);
	return require(module);
};

module.exports = {
	R,
	_,
	moment,
	fs,
	reload,
	...utilities
};
