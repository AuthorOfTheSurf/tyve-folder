"use strict";
/*global user_name:true, date_joined:true, real_name:true, activities:true */
/*jslint plusplus: true */

exports = module.exports = function (user_name, date_joined, real_name) {
    var user_name = user_name;
    var date_joined = date_joined;
    var real_name = real_name; 
    var activities = [];

    return {
        check_activity_exists: function (name) {
            var i;
            for (i = 0; i < activities.length; i++) {
                if (activities[i].get_name.equals(name)) {
                    return true;
                }
            }
            return false;
        },
        add_activity: function (name, icon_source) {
            if (!check_activity_exists(name)) {
                activities.push(newActivity(name,icon_source));
                return true;
            }
            return false;
        }
    }
}