const express = require( 'express' )
const router = express.Router()

const { getClients } = require( '../controllers/clientController' )

router.route( '/' )
//perfil

router.route( '/clients' )
    .get( getClients )

module.exports = router