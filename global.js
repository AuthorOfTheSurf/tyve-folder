function newActivity(name, icon_source) {
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

		},
		clock_out: function() {

		},
		get_elapsed: function() {
			return cumulative_interval;
		},
		get_current: function() {
			return current_interval;
		}
	}
}

function newUser(user_name, date_joined, real_name) {
	var user_name;
	var date_joined;
	var real_name;
	var activities = [];

	return {
		add_activity = function(name, icon_source) {
			if (!check_activity_exists(name)) {
				activities.push(newActivity(name,icon_source));
				return true;
			}
			return false;
		},
		check_activity_exists = function(name) {
			for (a in activities) {
				if a.get_name.equals(name) {
					return true;
				}
			}
			return false
		}
	}
}
