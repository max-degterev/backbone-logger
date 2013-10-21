backbone.log
============

Simple backbone logger, borrowed from SpineJS

Just throw in any preferred flavour and enjoy

Example:

```coffeescript
class MyView extends Backbone.View
  trace: true
  logPrefix: '[MyView]:'

  initialize: ->
    @log('awesome')
```
