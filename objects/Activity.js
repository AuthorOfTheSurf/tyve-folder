"use strict";
/*global user_name:true, date_joined:true, real_name:true, activities:true */
/*jslint plusplus: true */

exports = module.exports = function(name, icon_source) {
	var activity_name = name;
	    icon_source = icon_source;
	    clocked = false;
	var cumulative_interval, current_interval;

	return {
		set_name: function(name) {
			activity_name = name;
		},
		get_name: function() {
			return activity_name
		},
		add_icon: function(icon_location) {
			icon_source = icon_location;
		},
		clock_in: function() {
			//
		},
		clock_out: function() {
			//
		},
		get_elapsed: function() {
			return cumulative_interval;
		},
		get_current: function() {
			return current_interval;
		}
	}
}