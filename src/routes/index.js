const express = require( 'express' )
const router = express.Router()

const { getAll } = require( '../controllers/productController' )
const { createClient } = require( '../controllers/clientController' )
const { login, posts, verifyToken } = require( '../controllers/authenticationController.js' )

router.route( '/' )
    .get( getAll )

router.route( '/signup' )
    .post( createClient )

router.route( '/login' )
    .post( login )

router.route( '/posts' )
    .get( verifyToken, posts )

module.exports = router