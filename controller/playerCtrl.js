/*Defining module iplApp*/
var iplApp = angular.module('iplApp');
/*Defining the controller playerController*/
iplApp.controller('playerCtrl', retrieveData);
/*Defining the function retrieveData and passing required params*/
function retrieveData($scope, $firebaseObject, $rootScope, TeamService,$stateParams,ImageService){
    // console.log("playerCtrl");
    $scope.teamname = $stateParams.teamname;
    $scope.teamName = $stateParams.teamname.replace(/\s/g, "");
    var ref = firebase.database().ref($scope.teamName);
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(result) {
        $scope.data = result;
        });
    $scope.getImage = function(image) {
        console.log('function called in ');
        var url = ImageService.getUrl(image).then(function(url) {
            document.getElementById(image).src = url;
        });
    }
};
