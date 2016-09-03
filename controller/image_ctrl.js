var iplApp = angular.module('iplApp');
iplApp.controller('image_ctrl',retrieveImage);
// console.log(1);
function retrieveImage($scope, $firebaseObject, $rootScope, ImageService){
  $scope.getUrl = function(image) {
    var imageUrl = ImageService.getUrl('DelhiDareDevils/amit_mishra.png').then(function(url) {
          imageUrl = url;
          console.log(url);
          return imageUrl;
    });
   return imageUrl;
}
}
