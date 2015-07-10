'use strict'

var once = require('once-event-listener')

module.exports = function onceEvents (targets, event, callback) {
  var total = targets.length
  var completed = 0
  var results = []
  for (var i = 0; i < total; i++) {
    var target = targets[i]
    ;(function (i) {
      once(target, event, function onceEvent (e) {
        results[i] = e
        completed++
        if (completed === total) callback(results)
      })
    })(i)
  }
}
