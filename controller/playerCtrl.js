/**
* FileName:playerCtrl.js
* CreatedBy: Vamsee
* Date :07-08-2016
* Purpose : Defining controller function for teamplayers based on teamName
*/
/*Defining module iplApp*/
var iplApp = angular.module('iplApp');
/*Defining the controller playerController*/
iplApp.controller('playerCtrl', retrieveData);
/*Defining the function retrieveData and passing required params*/
function retrieveData($scope, $firebaseObject, $rootScope, TeamService,$stateParams,ImageService){
    // console.log("playerCtrl");
    /*Adding the stateParams teamname to the scope object*/
    $scope.teamname = $stateParams.teamname;
    /*replacing spaces in the teamname according to the database to retrieve information*/
    $scope.teamName = $stateParams.teamname.replace(/\s/g, "");
    /*Getting team info based on teamName*/
    var ref = firebase.database().ref($scope.teamName);
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(result) {
      /*Adding data to the scope object*/
        $scope.data = result;
        });
        /*function to retrieve image*/
    $scope.getImage = function(image) {
        console.log('function called in ');
        var url = ImageService.getUrl(image).then(function(url) {
          /*Inserting the image url into source*/
            document.getElementById(image).src = url;
        });
    }
};
