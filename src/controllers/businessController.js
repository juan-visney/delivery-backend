const business = require( '../models/business' )

const controller = {}

controller.getBusiness = async ( req, res ) => {
    const query = await business.get()
    res.json( query )
}

controller.findBusiness = async ( req, res ) => {
    const query = await business.find( req.params.id )
    res.json( query )
}

controller.createBusiness = async ( req, res ) => {
    const query = await business.create( req.body )
    res.json( { msg: ( query ? 'Business created' : 'Business not created' ) } )
}

controller.updateBusiness = async ( req, res ) => {
    const query = await business.update( req.params.id, req.body )
    res.json( { msg: ( query ? 'Business updated' : 'Business not updated' ) } )
}

controller.deleteBusiness = async ( req, res ) => {
    const query = await business.delete( req.params.id )
    res.json( { msg: ( query ? 'Business deleted' : 'Business not deleted' ) } )
}

module.exports = controller