(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('hotelsApp'));
    var $scope;
    describe("HotelCtrl", function() {
        beforeEach(inject(function ($rootScope, $controller) {
          $scope = $rootScope.$new();
          $controller('HotelCtrl', { $scope: $scope });
        }));

        it('init should have been called', function() {
          expect($scope.isLoaded).toBeTruthy();
          //expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
          //expect(vm.awesomeThings.length > 5).toBeTruthy();
        });
    });
  });
})();
