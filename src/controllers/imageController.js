const image = require( '../models/image' )
const fileupload = require( 'express-fileupload' )
const AWS = require( 'aws-sdk' )
const config = require( '../config/config' )

const controller = {}

const spacesEndpoint = new AWS.Endpoint( config.Endpoint )

const s3 = new AWS.S3( { endpoint: spacesEndpoint } )

controller.uploadImage = async ( req, res ) => {

  const urlImage = { msg: '' }

  const { file } = req.files

  const date = new Date()
  file.name = date.toISOString() + file.name

  try {
    const uploadObject = await s3.putObject( {
      ACL: 'public-read',
      Bucket: config.BucketName,
      Body: file.data,
      Key: file.name
    } ).promise()
    urlImage.msg = `https://${ config.BucketName }.${ config.Endpoint }/${ file.name }`

  } catch ( error ) {
    urlImage.msg = 'Error'
  }

  res.json( urlImage )

}

controller.getImage = async ( req, res ) => {
  res.json( { msg: 'image' } )
}

controller.updateImage = async ( req, res ) => {
  res.json( { msg: 'update image' } )
}

module.exports = controller