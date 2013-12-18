exports = module.exports = function(user_name, date_joined, real_name) {
	var user_name;
	var date_joined;
	var real_name;
	var activities = [];

	return {
		add_activity: function(name, icon_source) {
			if (!check_activity_exists(name)) {
				activities.push(newActivity(name,icon_source));
				return true;
			}
			return false;
		},
		check_activity_exists: function(name) {
			for (var a in activities) {
				if a.get_name.equals(name) {
					return true;
				}
			}
			return false
		}
	}
}