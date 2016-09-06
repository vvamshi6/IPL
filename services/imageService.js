var iplApp = angular.module('iplApp');
iplApp.factory('ImageService', function() {
    var url = {};
    return {
        getUrl: function(image) {
            var storage = firebase.storage();
            var storageRef = firebase.storage().ref();
            return storageRef.child(image).getDownloadURL().then(function(url) {
                return url;
            }).catch(function(error) {
                console.log("Error" + error);
            });
        }
    }
});
