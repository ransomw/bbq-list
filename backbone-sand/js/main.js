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
    'js/models',
    'js/views'
], function (
    models,
    views
) {
    "use strict";

    console.log("top of main");
    var entries = new models.Entries();
    entries.fetch();
    console.log("fetched entries");
    console.log(entries);

    var render_list = function (entries_collection) {
        var list_view = new views.List({
            model: entries_collection,
            el: document.getElementById('sandy-list')
        });

        console.log("instantated list view");
        console.log(list_view);
        console.log("calling list view render");
        list_view.render();
    };

    render_list(entries);

    document.getElementById('search-button')
        .onclick = function () {
            var search_text = document.getElementById('search-text')
                    .value.trim();
            console.log("got search text '" + search_text + "'");
            if (search_text === '') {
                render_list(entries);
            } else {
                render_list(new models.Entries(entries.filter(function (model) {
                    return model.get('title').toLowerCase()
                        .indexOf(search_text.toLowerCase()) != -1;
                })));
            }
        };

});
