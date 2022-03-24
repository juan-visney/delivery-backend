const express = require( 'express' )

const router = express.Router()

const { uploadImage, getImage, updateImage } = require( '../controllers/imageController' )

router.route( '/upload' )
  .post( uploadImage )

router.route( '/:id' )
  .get( getImage )
  .put( updateImage )

module.exports = router