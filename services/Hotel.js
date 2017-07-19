(function(){
    'use strict'
    class Hotel {
        listar() {
            let hoteles = {
                "hoteles":[
                    {
                        name: "Hotel Emperador", 
                        stars: 3, 
                        price: 1596, 
                        city: "Buenos Aires"
                    },
                    {
                        name: "Hotel Sofitel", 
                        stars: 4, 
                        price: 2145, 
                        city: "Buenos Aires"
                    },
                    {
                        name: "Hotel Pestana", 
                        stars: 2, 
                        price: 861, 
                        city: "Buenos Aires"},
                    {
                        name: "Hotel Intercontinental", 
                        stars: 4, 
                        price: 2050, 
                        city: "Cali"
                    },
                    {
                        name: "Hotel Toscana", 
                        stars: 2, 
                        price: 861, 
                        city: "Cali"
                    }
                ]
            }
            return hoteles;
        }
    };
    module.exports = Hotel;
})();