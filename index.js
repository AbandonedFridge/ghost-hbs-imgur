var App = require('ghost-app');

var GhostHbsImgur = App.extend({

  activate: function(ghost) {
    ghost.helpers.register('imgur', this.imgurHandler);
  },

  imgurHandler: function(id) {
    return '<blockquote class="imgur-embed-pub" lang="en" data-id="' + id + '"><a href="//imgur.com/' + id + '">What?</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>';
  }

});

module.exports = GhostHbsImgur;
