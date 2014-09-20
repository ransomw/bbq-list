/*global define: false */

define([
    'backbone'
], function (Backbone) {
		"use strict";

		// model corresponds to a single list item
		var ListRow = Backbone.View.extend({
				tagName: "li",

				className: "list-row",

				initialize: function () {
						this.listenTo(this.model, "change", this.render);
				},

				render: function () {
						this.$el.html([
								this.model.attributes['title'],
								this.model.attributes['author']
						].join(' - '));
						return this;
				}

		});

		// model is a list collection
		var List = Backbone.View.extend({
				tagName: "ul",
				className: "list",

				initialize: function () {
						this.listenTo(this.model, "change", this.render);
				},

				render: function () {
						console.log("in views render function");
						this.$el.html(this.model.map(function (row_model) {
								return [
										'<li>',
										row_model.attributes['title'],
										' - ',
										row_model.attributes['author'],
										'</li>'
								].join('');
						}));
						return this;
				}

		});

		return {
				ListRow: ListRow,
				List: List
		};

});
