var iplApp = angular.module('iplApp');
iplApp.controller('playerCtrl', retrieveData);
function retrieveData($scope, $firebaseObject, $rootScope, TeamService,$stateParams,ImageService){
    console.log("playerCtrl");
    $scope.teamname = $stateParams.teamname.replace(/\s/g, "");
    var ref = firebase.database().ref($scope.teamname);
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(result) {
        $scope.data = result;
        $scope.images = {};
    });
    $scope.getImage = function(image) {
        console.log('function called in ');
        var url = ImageService.getUrl(image).then(function(url) {
            document.getElementById(image).src = url;
        });
    }
};
