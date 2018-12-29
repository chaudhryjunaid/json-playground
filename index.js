const decache = require('decache');
const R = require('ramda');
const _ = require('lodash');
const moment = require('moment-timezone');
const jsonfile = require('jsonfile');
const fs = require('fs');
const utilities = require('./utilities');

const reload = (module) => {
	decache(module);
	return require(module);
};

module.exports = {
	R,
	L,
	moment,
	fs,
	reload,
	...jsonfile,
	...utilities
};
