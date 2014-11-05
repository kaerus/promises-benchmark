var rsvp = require('rsvp');

var listTest = require('./promises')(function(f){
    return new rsvp.Promise(function(resolve,reject){
	return f(resolve,reject);
    });
})

module.exports = function(path, noiseFactor) { return function(deferred) {
    return listTest(path, noiseFactor)
        .then(function(v) { deferred.resolve() })
        .finally()
}}
