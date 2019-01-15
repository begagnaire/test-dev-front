// See http://brunch.io for documentation.


exports.config = {

    files : {
        javascripts: {joinTo: 'app.js'},
        stylesheets: {joinTo: 'app.css'},
    },


  /*paths: {
      // Dependencies and current project directories to watch
      watched: ["css", "js", "vendor", "scss", "fonts"],
      // Where to compile files to

  },*/


  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: ["node_modules/bootstrap/scss", "node_modules/font-awesome/scss"], // Tell sass-brunch where to look for files to @import
        precision: 8 // Minimum precision required by bootstrap-sass
      }
    },
    copycat: {
      "fonts" : ["static/fonts", "node_modules/font-awesome/fonts"],
      verbose : false, //shows each file that is copied to the destination directory
      onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
    }
  },

  npm: {
    enabled: true,
    globals: { // Bootstrap's JavaScript requires both '$' and 'jQuery' in global scope
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
      Popper: 'popper.js',
      bootstrap: 'bootstrap', // Require Bootstrap's JavaScript globally
    }
  }
};