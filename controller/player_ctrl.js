angular.module('iplApp').controller('player_ctrl',demo);
function demo($scope,$firebaseObject){
  var ref = firebase.database().ref();
// console.log(data11)
var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$loaded().then(function(result){
     //console.log(result.DelhiDareDevils);
     //console.log(syncObject);
     $scope.data = result.DelhiDareDevils;
    var array = [];
    $scope.setData = function(key){
     str = key.replace(/\s/g,'');
     $scope.data = result[str];
     console.log($scope.data);
    }
      //$scope.data = data;
    $scope.images = {};
    $scope.teams = result.tean_info;
  });
// putting a console.log here won't work, see below
};
