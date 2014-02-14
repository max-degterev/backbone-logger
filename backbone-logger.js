//
// Author: Max Degterev @suprMax
//

(function (root, factory) {
   if (typeof exports === 'object' && typeof require === 'function') {
     module.exports = factory(require("underscore"), require("backbone"));
   } else if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["underscore","backbone"], function(_, Backbone) {
        // Use global variables if the locals are undefined.
        return factory(_ || root._, Backbone || root.Backbone);
      });
   } else {
      // RequireJS isn't being used. Assume underscore and backbone are loaded in <script> tags
      factory(_, Backbone);
   }
}(this, function(_, Backbone) {

  var Log = {
    trace: true,
    logPrefix: '[app]:',
    log: function() {
      var args = 1 <= arguments.length ? Array.prototype.slice.call(arguments, 0) : [];

      if (!this.trace) {
        return;
      }

      if (this.logPrefix) {
        args.unshift(this.logPrefix);
      }

      if (typeof console !== "undefined" && console !== null) {
        if (typeof console.log === "function") console.log.apply(console, args);
      }

      return this;
    }
  };

  _.extend(Backbone.Collection.prototype, Log);
  _.extend(Backbone.Model.prototype, Log);
  _.extend(Backbone.View.prototype, Log);
  _.extend(Backbone.Router.prototype, Log);

  Backbone.Log = Log;

}));
