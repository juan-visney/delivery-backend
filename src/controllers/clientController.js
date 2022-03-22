const client = require( '../models/client' )
const jwt = require( 'jsonwebtoken' )
const path = require( 'path' )

const controller = {}

controller.getClients = async ( req, res ) => {
    const query = await client.get()
    res.json( query )
}

controller.findClient = async ( req, res ) => {
    const query = await client.find( req.params.id )
    res.json( query )
}

controller.createClient = async ( req, res ) => {
    const user = req.body
    const query = await client.create( user )
    jwt.sign( { user }, 'secretkey', { expiresIn: '1h' }, ( err, token ) => {
        res.json( { token } )
    } )
}

controller.updateClient = async ( req, res ) => {
    const query = await client.update( req.params.id, req.body )
    res.json( { msg: ( query ? 'Client updated' : 'Client not updated' ) } )
}

controller.deleteClient = async ( req, res ) => {
    const query = await client.delete( req.params.id )
    res.json( { msg: ( query ? 'Client deleted' : 'Client not deleted' ) } )
}

controller.upload = async ( req, res ) => {
    let newpath = ''
    switch ( req.body.rol ) {
        case 'cliente': newpath = __dirname + "../../public/files/clientes/"; break
        case 'empresa': newpath = __dirname + "../../public/files/empresas/"; break
        case 'delivery': newpath = __dirname + "../../public/files/deliverys/"; break
        case 'admin': newpath = __dirname + "../../public/files/admins/";
    }

    const file = req.files.file;
    const filename = file.name

    file.mv( `${ newpath }${ filename }`, ( err ) => {
        if ( err ) {
            res.status( 500 ).send( { message: "File upload failed", code: 200 } );
        }
        else res.status( 200 ).send( { message: "File Uploaded", code: 200 } );
    } )
}

controller.send = async ( req, res ) => {
    res.sendFile( path.join( __dirname, `../public/img/${ req.params.img }` ) )
}

module.exports = controller