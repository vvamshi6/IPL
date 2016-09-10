/*
* FileName:teamCtrl.js
* CreatedBy: Vamsee
* Purpose : Creating a Controller for teams information
* Date :6-09-2016
*/
/*Creating module of iplApp*/
var iplApp = angular.module('iplApp');
/*team controller for fetching teams information*/
iplApp.controller('teamCtrl', retrieveData);
/*function to retrieve data from firebase*/
function retrieveData($scope, $firebaseObject, $rootScope, TeamService, ImageService,$stateParams){
  console.log('after click',$stateParams.teaminformation);
  $scope.teamname = $stateParams.teaminformation;
    /*passing the reference to firebase to get data*/
    var ref = firebase.database().ref('tean_info');
    var syncObject = $firebaseObject(ref);
    /*loading data as a promise*/
    syncObject.$loaded().then(function(data) {
      /*Adding the data to the scope object*/
        $scope.data = data;
        /*teamdata object for fetching particular team info based on teamname*/
        $scope.teamdata = {};
        angular.forEach(data,function(i){
          /*comparing the teamname and scope.teamname*/
          if(i.team_name == $scope.teamname){
            console.log(i.team_name);
            console.log(i);
            $scope.teamdata = i;
          }
        })
        /*logging the scope.teamdata */
        console.log($scope.teamdata);
        /*function to retrieve the image*/
        $scope.getImage = function(image) {
            console.log(image);
            var url = ImageService.getUrl(image).then(function(url) {
                // $scope.iurl = url;
                // console.log($scope.iurl);
                document.getElementById(image).src = url;
                // return url;
                // var myEl = angular.element( document.querySelector( '#image' ) );
                // myEl.ngSrc = url;
                // var target = angular.element(image);
                // target.src = url;
            });
        }
    });
    // var storage = firebase.storage();
    // var storageRef = firebase.storage().ref();
    // storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
    //     //console.log(url);
    //     // Get the download URL for 'images/stars.jpg'
    //     // This can be inserted into an <img> tag
    //     // This can also be downloaded directly
    // }).catch(function(error) {
    //     console.log("Error" + error);
    // });
};
