/*global define: false */

define([
    'backbone',
    'lodash',
    'js/list_json'
], function (Backbone, _, list_json) {
    "use strict";

    console.log(list_json);

    var Entry = Backbone.Model.extend({}),
        Entries = Backbone.Collection.extend({
            model: Entry
        });

    Backbone.sync = function (method, model, options) {
        if (method === 'read') {
            console.log("in Backbone.sync with model");
            console.log(model);
            console.log("and data entries");
            console.log(list_json.data);
            if (model.model) {
                model.add(list_json.data.entries);
            } else {
                throw new Error("read operation is only supported for collections");
            }
        } else {
            throw new Error("only read operation is supported by sync method");
        }
    };

    return {
        Entries: Entries
    };

});
