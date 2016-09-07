angular.module('iplApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/team');
        $stateProvider
            .state('team', {
                url: '/team',
                templateUrl: 'template/team.html',
                controller: 'teamCtrl'
            })
            .state('teamplayer',{
              url: '/?teamname',
              templateUrl : 'template/player.html',
              controller : 'playerCtrl'
            })
    });
