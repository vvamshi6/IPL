var iplApp = angular.module('iplApp');
iplApp.controller('player_ctrl', retrieveData);

function retrieveData($scope, $firebaseObject, $rootScope, TeamService) {
    var ref = firebase.database().ref(TeamService.getData());
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(result) {
        $scope.data = result;
        $scope.images = {};
    });
};
