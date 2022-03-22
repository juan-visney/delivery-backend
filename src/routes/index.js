const express = require( 'express' )
const router = express.Router()

const { getAll } = require( '../controllers/productController' )
const { createClient, getClients } = require( '../controllers/clientController' )
const { login, posts, verifyToken } = require( '../controllers/authenticationController.js' )

router.route( '/' )
    .get( getAll )

router.route( '/signup' )
    .post( createClient )

router.route( '/login' )
    .post( login )

router.route( '/posts' )
    .get( verifyToken, posts )

//admin
router.route( '/clients' )
    .get( getClients )

module.exports = router