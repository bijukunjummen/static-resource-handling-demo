(function() {
    'use strict';

    angular
        .module('hotelsApp')
        .controller('HotelCtrl', HotelCtrl)
        .controller("HotelEditCtrl", HotelEditCtrl);

    /** @ngInject */
    function HotelCtrl($scope, Hotel, $state) {
        function init() {
            $scope.isLoaded = false;
            $scope.getHotels();
        }


        $scope.getHotels = function () {
            $scope.hotels = Hotel.query();
            $scope.isLoaded = true;
        };

        $scope.deleteHotel = function (hotel) {
            return hotel.$delete({}, function () {
                $scope.hotels.splice($scope.hotels.indexOf(hotel), 1);
            });
        };

        $scope.createHotel = function () {
            var hotel = new Hotel($scope.hotel);
            hotel.$save({}, function() {
                $state.transitionTo("home");
            });
        };

        init();
    }

    function HotelEditCtrl($scope, Hotel, $state, $stateParams) {
        function init() {
            $scope.hotel = Hotel.get({id:$stateParams.hotelId})
        }

        $scope.updateHotel = function() {
            var hotel = new Hotel($scope.hotel);
            hotel.$update().then(function() {
                $state.transitionTo("home");
            }) ;
        }
        init();
    }

})();