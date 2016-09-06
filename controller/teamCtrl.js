var iplApp = angular.module('iplApp');
iplApp.controller('teamCtrl', retrieveData);
function retrieveData($scope, $firebaseObject, $rootScope, TeamService, ImageService) {
    var ref = firebase.database().ref('tean_info');
    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(data) {
        //console.log(data);
        $scope.data = data;
        // $scope.setTeamName = function(name) {
        //     console.log(name);
        //     TeamService.setData(name);
        // }
        $scope.getImage = function(image) {
            console.log('function called');
            var url = ImageService.getUrl(image).then(function(url) {
                // var currentElement = angular.element('image');
                // currentElement.src = url;
                // angular.element(image) = url;
                document.getElementById(image).src = url;
                // console.log(url);
                // $scope.actualUrl(url);
                // $scope.iUrl = url;
                // console.log($scope.iUrl);
                // return $scope.iUrl;
            });
            //  return iUrl;
        }
        // $scope.images = {};
        // angular.forEach(data, function(i) {
        //     ImageService.getUrl(i.team_img_url).then(function(url) {
        //         $scope.images[i.team_img_url] = url;
        //     });
        // });
        // console.log($scope.images);
        // $scope.actualUrl = function(url){
        //   return url;
        // }
    });
    var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    //console.log(storageRef);
    storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
        //console.log(url);
        // Get the download URL for 'images/stars.jpg'
        // This can be inserted into an <img> tag
        // This can also be downloaded directly
    }).catch(function(error) {
        console.log("Error" + error);
    });
};
