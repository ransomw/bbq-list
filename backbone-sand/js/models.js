/*global define: false */

define([
    'backbone',
    'js/list_json'
], function (Backbone
             ,
             list_json
            ) {
    "use strict";

    console.log(list_json);

    var Entry = Backbone.Model.extend({}),
        Entries = Backbone.Collection.extend({
            model: Entry
        });

    return {
        Entries: Entries
    };

});
