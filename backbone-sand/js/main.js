require.config({
    baseUrl: '',
    paths: {
        'handlebars': 'bower_components/handlebars/handlebars',
        'domReady': 'bower_components/requirejs-domready/domReady',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'underscore': 'bower_components/lodash/dist/lodash.underscore',
        'when': 'bower_components/when',
        'backbone': 'bower_components/backbone/backbone',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'text': 'bower_components/requirejs-text/text'
    },
    shim: {
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    packages: [
        {name: 'when', path: 'bower_components/when', main: 'when'}
    ]
});

require([
    'js/models'
    // 'js/list_json'
], function (
    models
    // list_json
) {
    "use strict";

    console.log("top of main");
    var entries = new models.Entries();
    entries.fetch();
    console.log("fetched entries");
    console.log(entries);

});
