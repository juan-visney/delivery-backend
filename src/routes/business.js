const express = require( 'express' )
const router = express.Router()

const { findBusiness, updateBusiness, deleteBusiness } = require( '../controllers/businessController' )
const { createProduct, getProducts, findProduct, updateProduct, deleteProduct, getProductsByBusiness } = require( '../controllers/productController' )

router.route( '/' )
    .post( createProduct )

router.route( '/:id' )
    .get( findBusiness )
    .put( updateBusiness )
    .delete( deleteBusiness )

router.route( '/product/:id' )
    .get( findProduct )
    .put( updateProduct )
    .delete( deleteProduct )

router.route( '/products/:id' )
    .get( getProductsByBusiness )

module.exports = router