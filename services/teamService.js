/*
* FileName:teamService.js
* CreatedBy: Vamsee
* Date :07-08-2016
* Purpose : teamService for changing the name of team when clicked
*/
var iplApp = angular.module('iplApp');
iplApp.factory('TeamService', function() {
    var teamName;
    return {
        setData: function(team_name) {
            this.teamName = team_name.replace(/\s/g, "");
            return teamName;
        },
        getData: function(team_name) {
            return this.teamName;
        }
    }
});
