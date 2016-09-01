var iplApp = angular.module('iplApp');
iplApp.controller('team_ctrl', retrieveData);

function retrieveData($scope, $firebaseObject, $rootScope, TeamService) {
    var ref = firebase.database().ref('tean_info');
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(result) {
        console.log(result);
        $scope.data = result;
        $scope.teamName = function(name) {
        console.log(name);
        TeamService.setData(name);
        }
    });
    var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    console.log(storageRef);
    storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
      console.log(url);
      // Get the download URL for 'images/stars.jpg'
  // This can be inserted into an <img> tag
  // This can also be downloaded directly
  }).catch(function(error) {
      console.log("Error"+error);
    });


};
