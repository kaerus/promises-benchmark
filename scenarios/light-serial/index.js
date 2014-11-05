var path      = require('path')
var benchmark = require('../../benchmark')

var isHarmony = benchmark.isHarmony
var dirname   = path.join(__dirname, '../../fixtures/files')

function done(deferred) { deferred.resolve() }

function run(noise, bench) {
    if (isHarmony()) bench('Co', require('./co')(dirname, noise))
    bench('Callbacks (baseline)', require('./callbacks')(dirname, noise, done))
    bench('Async', require('./async')(dirname, noise, done))
    bench('RSVP', require('./rsvp')(dirname, noise))
    bench('Davy', require('./davy')(dirname, noise))
    bench('Q', require('./q')(dirname, noise))
    bench('When', require('./when')(dirname, noise))
    bench('Deferred', require('./deferred')(dirname, noise))
    bench('microPromise', require('./micropromise')(dirname, noise))
    bench('Bluebird', require('./bluebird')(dirname, noise))
}

benchmark.suite('Lightweight serial (no noise)', function(bench) {
    run(0, bench)
})

benchmark.suite('Lightweight serial (some noise)', function(bench) {
    run(50, bench)
})

benchmark.suite('Lightweight serial (noisy)', function(bench) {
    run(100, bench)
})

benchmark.suite('Lightweight serial (mostly noise)', function(bench) {
    run(300, bench)
})
