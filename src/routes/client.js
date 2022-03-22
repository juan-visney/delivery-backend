const express = require( 'express' )
const router = express.Router()

const { createClient, findClient, updateClient, deleteClient, upload, send } = require( '../controllers/clientController' )
const { getAll, getProductsByBusiness } = require( '../controllers/productController' )
const { getDetails, createSale, completeSale, deleteSale } = require( '../controllers/saleController' )
const { createDetail, updateDetail, deleteDetail } = require( '../controllers/detailControlles' )

router.route( '/:img' )
    .get( send )

router.route( '/upload' )
    .post( upload )

router.route( '/' )
    .get( getAll )
    .post( createClient )

router.route( '/:id' )
    .get( findClient )
    .put( updateClient )
    .delete( deleteClient )

router.route( '/products/:id' )
    .get( getProductsByBusiness )

router.route( '/sale' )
    .post( createSale )

router.route( '/sale/:id' )
    .get( getDetails )
    .post( completeSale )
    .delete( deleteSale )

router.route( '/detail' )
    .post( createDetail )

router.route( '/detail/:id' )
    .put( updateDetail )
    .delete( deleteDetail )

module.exports = router