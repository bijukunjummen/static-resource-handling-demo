(function() {
    'use strict';

    angular
        .module('hotelsApp')
        .factory('Hotel', Hotel);


    function Hotel($resource) {
        return $resource('rest/hotels', {id: "@id"}, {
            update: {
                method: 'PUT'
            }
        });
    }
})();