'use strict'
const status = require('http-status')

module.exports = (app, options) => {
    const {repo} = options

    // Se define el middelware del webservice.
    app.get('/hoteles', (req, res, next) => {
        repo.getHotels().then(hoteles => {
            res.status(status.OK).json({hotels: hoteles})
        }).catch(next)
    })

}
