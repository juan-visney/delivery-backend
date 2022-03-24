const users = require( '../models/user' )
const jwt = require( 'jsonwebtoken' )

const controller = {}

controller.login = async ( req, res ) => {
    const user = await users.find( req.body.user, req.body.pass )
    if ( user[ 0 ] ) {
        jwt.sign( { user }, 'secretkey', { expiresIn: '2h' }, ( err, token ) => {
            res.json( { token, id: user[ 0 ].idUser, user: user[ 0 ].user, rol: user[ 0 ].rol, photo: user[ 0 ].photo, name: user[ 0 ].name } )
        } )
    }
    else
        res.json( { msg: "not found" } )
}

controller.posts = async ( req, res ) => {
    jwt.verify( req.token, 'secretkey', ( error, authData ) => {
        if ( error ) {
            res.sendStatus( 403 )
        }
        else {
            authData.id = authData.user[ 0 ].idUser
            authData.rol = authData.user[ 0 ].rol
            authData.name = authData.user[ 0 ].name
            authData.photo = authData.user[ 0 ].photo
            authData.user = authData.user[ 0 ].user
            res.json( {
                authData
            } )
        }
    } )
}

controller.verifyToken = ( req, res, next ) => {
    const bearerHeader = req.headers[ 'authorization' ]
    if ( typeof bearerHeader !== 'undefined' ) {
        const bearerToken = bearerHeader.split( " " )[ 1 ]
        req.token = bearerToken
        next()
    }
    else {
        res.sendStatus( 403 )
    }
}

module.exports = controller