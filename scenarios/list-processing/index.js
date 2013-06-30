var path      = require('path')
var benchmark = require('../../benchmark')

var dirname     = path.join(__dirname, '../../fixtures/files')

function done(deferred) { deferred.resolve() }

function run(noise, bench) {
  bench('Callbacks', require('./callbacks')(dirname, noise, done))
  bench('Q', require('./q')(dirname, noise))
  bench('When', require('./when')(dirname, noise))
  bench('Deferred', require('./deferred')(dirname, noise))
}

benchmark.suite('List processing (no noise)', function(bench) {
  run(0, bench)
})

benchmark.suite('List processing (some noise)', function(bench) {
  run(50, bench)
})

benchmark.suite('List processing (noisy)', function(bench) {
  run(100, bench)
})

benchmark.suite('List processing (mostly noise)', function(bench) {
  run(300, bench)
})
