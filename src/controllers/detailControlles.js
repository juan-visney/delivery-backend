const detail = require( '../models/detail' )

const controller = {}

controller.getDetails = async ( req, res ) => {
    const query = await detail.get()
    res.json( query )
}

controller.findDetail = async ( req, res ) => {
    const query = await detail.find( req.params.id )
    res.json( query )
}

controller.createDetail = async ( req, res ) => {
    const query = await detail.create( req.body )
    res.json( { msg: ( query ? 'Detail created' : 'Detail not created' ) } )
}

controller.updateDetail = async ( req, res ) => {
    const query = await detail.update( req.params.id, req.body )
    res.json( { msg: ( query ? 'Detail updated' : 'Detail not updated' ) } )
}

controller.deleteDetail = async ( req, res ) => {
    const query = await detail.delete( req.params.id )
    res.json( { msg: ( query ? 'Detail deleted' : 'Detail not deleted' ) } )
}

module.exports = controller