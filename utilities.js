const fs = require('fs');

const saveJson = (json, file, callback = () => console.log('done.')) => {
	return fs.writeFile('myjsonfile.json', json, 'utf8', callback);
};

module.exports = {
	saveJson
};
