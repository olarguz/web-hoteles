(function () {
    'use strict';
    angular.module('almundo', ['lumx'])
            .controller('controladorHoteles', HotelController);
    HotelController.$inject = ['$http'];

    function HotelController($http) {
        const vm = this;
        vm.stars = obtenerEstrellas;
        $http.get("/hoteles").then(function (res) {
            vm.hoteles = res.data.hotels;
        });
        function obtenerEstrellas(length) {
            return new Array(length);
        }
    }
})();