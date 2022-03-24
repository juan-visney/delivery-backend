const express = require( 'express' )
const jwt = require( 'jsonwebtoken' )
const cors = require( 'cors' )
const { port } = require( './config/keys' )
const fileupload = require( 'express-fileupload' )

//init
const app = express()

//settings
app.set( 'port', port )


//line extra
//middleware
app.use( cors() )
app.use( express.json() )
app.use( fileupload( {
  tempFileDir: '/temp'
} ) )
app.use( express.static( "files" ) )

//routes
app.use( '/api/user', require( './routes/user' ) )
app.use( '/api/images', require( './routes/images' ) )
app.use( '/api', require( './routes/index' ) )
app.use( '/api/client', require( './routes/client' ) )
app.use( '/api/admin', require( './routes/admin' ) )
app.use( '/api/business', require( './routes/business' ) )
app.use( '/api/delivery', require( './routes/delivery' ) )

module.exports = app