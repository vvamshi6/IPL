var iplApp = angular.module('iplApp');
iplApp.controller('teamCtrl', retrieveData);
function retrieveData($scope, $firebaseObject, $rootScope, TeamService, ImageService,$stateParams){
  console.log('after click',$stateParams.teaminformation);
  $scope.teamname = $stateParams.teaminformation;
    var ref = firebase.database().ref('tean_info');
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(data) {
        $scope.data = data;
        $scope.teamdata = {};
        angular.forEach(data,function(i){
          if(i.team_name == $scope.teamname){
            console.log(i.team_name);
            console.log(i);
            $scope.teamdata = i;
          }
        })
        console.log($scope.teamdata);
        $scope.getImage = function(image) {
            console.log('function called');
            var url = ImageService.getUrl(image).then(function(url) {
                document.getElementById(image).src = url;
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
