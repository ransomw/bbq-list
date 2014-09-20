/*global define: false */
/*global JSON: false */

/**
 * For quickness, only parse the JSON data used to build the list once
 */
define([
    'text!list_config.json',
    'text!list_data.json'
], function (list_config, list_data) {
    "use strict";

    return {
        config: JSON.parse(list_config),
        data: JSON.parse(list_data)
    };

});
