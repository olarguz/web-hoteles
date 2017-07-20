(function () {
    'use strict';
    angular.module('almundo', ['lumx', 'rzModule'])
            .controller('controladorHoteles', HotelController);
    HotelController.$inject = ['$http'];

    function HotelController($http) {
        const vm = this;

        $http.get("/hoteles").then(function (res) {
            vm.hoteles = res.data.hotels;
        });

        vm.star_filter = {
            value: 0,
            options: {
                step: 1,
                floor: 0,
                ceil: 4
            }
        }
        
        vm.price_filter = {
            value: 0,
            max: 3000,
            options: {
                step: 100,
                floor: 0,
                ceil: 3000
            }
        }
        vm.stars = obtenerEstrellas;
        vm.filter = filter;

        function obtenerEstrellas(length) {
            return new Array(length);
        }

        function filter(element) {
            let valid = {
                name: true, star: true, price: true
            };
            if (angular.isDefined(vm.searchHotel) && vm.searchHotel.replace(/\s/g, '').length > 0) {
                valid.name = element.name.toLowerCase().includes(vm.searchHotel.toLowerCase());
            }
            if (vm.star_filter.value > 0) {
                valid.star = (parseInt(element.stars) === vm.star_filter.value);
            }
            if (vm.price_filter.value > 0 || vm.price_filter.max !== 3000) {
                valid.price = (parseInt(element.price) >= vm.price_filter.value && parseInt(element.price) <= vm.price_filter.max);
            }
            return (valid.name && valid.star && valid.price);
        }
    }

})();
