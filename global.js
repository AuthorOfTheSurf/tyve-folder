//dunno what goes here really

function newActivity(name, icon_source) {
	var activity_name = name;
	var icon_source;
	var cumulative_interval;
	var current_interval;
	var clocked = false;

	return {
		rename: function(name) {activity_name = name;},
		add_icon: function(icon_location) {icon_source = icon_location;},
		clock_in: function() {},
		clock_out: function() {}
	}
}

function newUser(user_name, date_joined, real_name) {
	var user_name;
	var date_joined;
	var real_name;
	var activities = [];

	return {

	}
}
