const express = require( 'express' )
const router = express.Router()

const { getSale, getDetails } = require( '../controllers/saleController' )

router.route( '/' )
    .get( getSale )

router.route( '/:id' )
    .get( getDetails )

module.exports = router