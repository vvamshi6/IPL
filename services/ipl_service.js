var iplApp = angular.module('iplApp',[]);
iplApp.factory('MathService',function(){
  var factory = {};
  factory.multiply = function(a,b){
    return a * b;
  }
  return factory;
})
