var elasticsearch = require('elasticsearch');

console.log("Connecting to remote ES Server!!!");

var client = new elasticsearch.Client ( {
	hosts: [
		'http://35.193.19.18:9200'
	]
});

module.exports = client;