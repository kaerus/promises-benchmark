var davy = require('davy')

var listTest = require('./promises')(function(f){
    return new davy(f);
})

module.exports = function(path, noiseFactor) { return function(deferred) {
    return listTest(path, noiseFactor)
        .then(function(v) { deferred.resolve() })
        .finally()
}}
