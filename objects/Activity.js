exports = module.exports = function(name, icon_source) {
	var activity_name = name;
	var icon_source;
	var cumulative_interval;
	var current_interval;
	var clocked = false;

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