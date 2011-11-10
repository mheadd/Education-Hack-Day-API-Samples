/**
 * Simple Node.js script that uses the Browse Schools method
 *  of the GreatSchools API
 *  http://www.greatschools.org/api/docs/browseSchools.page
 */
var http = require('http');
var util = require('util');

// API Key.
var key = 'api-key-goes-here';

// API URL components.
var state = 'MD';
var city = 'Baltimore';
var type = 'public';
var level = 'high-schools';
var limit = 1;

// Build path to API resource.
var path = '/schools/' + state + '/' + city + '/' + type + '/' + level;

// Add parameters to request.
path += '?key=' + key + '&limit=' + limit;

var options = {
	host: 'api.greatschools.org',
	path: path,
	method: 'GET' 
}

var xml = '';

http.get(options, function(response) {
	response.on('data', function(chunk){
		xml += chunk;
	});
	response.on('end', function(){
		util.puts(xml);
	});
});

