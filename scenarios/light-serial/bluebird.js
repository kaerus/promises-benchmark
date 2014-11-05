var bb       = require('bluebird').Promise
var listTest = require('./promises')(function(f) {
    var d = new bb(function(resolve,reject){
	f(resolve,reject);
    });
    
    return d;
});

module.exports = function(path, noiseFactor) {
    return function(deferred) {
	return listTest(path, noiseFactor)
            .then(function(v){
		deferred.resolve();
	    }).done();
    }
}

