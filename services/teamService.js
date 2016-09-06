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
