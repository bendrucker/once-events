# once-events [![Build Status](https://travis-ci.org/bendrucker/once-events.svg?branch=master)](https://travis-ci.org/bendrucker/once-events) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/once-events.svg)](https://greenkeeper.io/)

> Wait for multiple DOM events


## Install

```
$ npm install --save once-events
```


## Usage

```js
var onceEvents = require('once-events')

onceEvents([element1, element2], 'click', function (events) {
  //=> element1 click event is events[0]
  //=> element2 click event is events[1]
})
```

## API

#### `onceEvents(targets, event, callback)` -> `undefined`

##### targets

*Required*  
Type: `array[eventTarget]`

An array of DOM [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)s.

##### event

*Required*  
Type: `string`

The event to listen on.

##### callback

*Required*  
Type: `function`  
Arguments: `events`

A callback called with an array of events. The order matches the order of the targets, not the order in which the events ocurred.


## License

MIT © [Ben Drucker](http://bendrucker.me)
