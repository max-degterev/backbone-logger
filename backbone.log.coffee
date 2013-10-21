Log =
  trace: true

  logPrefix: '[app]:'

  log: (args...) ->
    return unless @trace
    if @logPrefix then args.unshift(@logPrefix)
    console?.log?(args...)
    @

_.extend(Backbone.Collection::, Log)
_.extend(Backbone.Model::, Log)
_.extend(Backbone.View::, Log)
_.extend(Backbone.Router::, Log)

Backbone.Log = Log
