const product = require( '../models/product' )

const controller = {}

controller.getAll = async ( req, res ) => {
    const query = await product.get()
    res.json( query )
}

controller.createProduct = async ( req, res ) => {
    const query = await product.create( req.body )
    res.json( { "msg": ( query ? "product created" : "product no created" ) } )
}

controller.getProducts = async ( req, res ) => {
    const query = await product.get( req.params.id )
    res.json( query )
}

controller.getProductsByBusiness = async ( req, res ) => {
    const query = await product.getByBusiness( req.params.id )
    res.json( query )
}

controller.findProduct = async ( req, res ) => {
    const query = await product.find( req.params.id )
    res.json( query )
}

controller.updateProduct = async ( req, res ) => {
    const query = await product.update( req.body, req.params.id )
    res.json( { "msg": ( query ? "product updated" : "product no updated" ) } )
}

controller.deleteProduct = async ( req, res ) => {
    const query = await product.delete( req.params.id )
    res.json( { "msg": ( query ? "product deleted" : "product no deleted" ) } )
}

module.exports = controller