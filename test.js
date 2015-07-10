'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var onceEvents = require('./')

test(function (t) {
  t.plan(1)
  var targets = [new EventTarget(), new EventTarget()]
  onceEvents(targets, 'load', function (results) {
    t.deepEqual(results, [0, 1])
  })
  targets[1].send('load', 1)
  targets[0].send('load', 0)
})
