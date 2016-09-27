/**
* FileName:ImageService.js
* CreatedBy: Vamsee
* Date :07-08-2016
* Purpose : ImageService for getting image from firebase
*/
var iplApp = angular.module('iplApp');
/*Creating ImageService using factory method*/
iplApp.factory('ImageService', function() {
    var url = {};
    return {
      /*Creating getUrl function*/
        getUrl: function(image) {
          /*Creating firebase storage and firebase reference*/
            var storage = firebase.storage();
            var storageRef = firebase.storage().ref();
            /*Returning promise which contains the url*/
            return storageRef.child(image).getDownloadURL().then(function(url) {
                return url;
            }).catch(function(error) {
                console.log("Error" + error);
            });
        }
    }
});
