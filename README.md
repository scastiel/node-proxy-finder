# proxy-finder

*proxy-finder* is a Node.js module which will find for you big lists of HTTP
proxy servers. All you need is a magical request, and the module will make
the request on Google, and give you every HTTP proxy (IP address and port) it
can find in the results.

Here is the secret *magical* request: [+”:8080″ +”:3128″ +”:80″ filetype:txt](https://www.google.fr/#q=%2B%E2%80%9D:8080%E2%80%B3+%2B%E2%80%9D:3128%E2%80%B3+%2B%E2%80%9D:80%E2%80%B3+filetype:txt) (I found it [here](http://getfoxyproxy.org/proxylists.html).)

## Example

To install the module: `npm install proxy-finder`

```javascript
var proxyFinder = require('proxy-finder');

proxyFinder.findProxiesFromSearch(query, 'en', 10, function(host, port) {
	console.log("Hey I found " + host + ":" + port + ".");
});
```
