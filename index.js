var GoogleScraper = require('google-scraper').GoogleScraper;
var request = require('request');

var hostPortRegexp = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\:(\d{1,5})/g;

function readProxiesFromString(string, callback) {
	while( matches = hostPortRegexp.exec(string) ) {
		var host = matches[1];
		var port = matches[2];
		callback(host, port);
	}
}

function readProxiesFromUrl(url, callback) {
	request(url, function(err, res) {
		if( !err && res.body ) {
			readProxiesFromString(res.body, callback);
		}
	});
}

function readProxiesFromUrls(urls, callback) {
	urls.forEach(function(url) {
		readProxiesFromUrl(url, callback);
	});
}

function findProxiesFromSearch(query, language, nbResults, callback) {
	var options = {
		keyword : query,
		language : language,
		results : nbResults
	};
	var scraper = new GoogleScraper(options);
	scraper.getGoogleLinks(function(urls) {
		readProxiesFromUrls(urls, callback)
	});
}

module.exports = {
	findProxiesFromSearch: findProxiesFromSearch
};
