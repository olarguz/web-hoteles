'use strict'
const server = require('./app')
let hoteles = [
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

let repo = {
    /**
     * Funcion que permmite retornar los hoteles que estan en la base de datos.
     * @returns {Promise}
     */
    getHotels() {
        return Promise.resolve(hoteles)
    }
}

/**
 * Variable para asinar la aplicacion del servicio.
 * @type s Service
 */
let app = null

/**
 * Se arranca el servicio.
 */
 console.log(repo)
server.start({port: 8085, repo: repo}).then(s => app = s)

const options = {year: 'numeric', month: 'numeric', day: 'numeric' ,hour:'numeric', minute:'numeric'};
const fecha = new Date().toLocaleDateString('es-ES',options);
console.log(`${fecha} Listening on localhost:${8085}...`);