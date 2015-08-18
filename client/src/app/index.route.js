(function() {
  'use strict';

  angular
    .module('hotelsApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('home', {
          url:'/home',
          templateUrl: 'app/hotel/list.html',
          controller: 'HotelCtrl'
        }).state('edit', {
          url:'/edit/:hotelId',
          templateUrl: 'app/hotel/edit.html',
          controller: 'HotelEditCtrl'
        }).state('create', {
          url:'/create',
          templateUrl: 'app/hotel/create.html',
          controller: 'HotelCtrl'
        });
  }

})();